import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

import QuizManager from '../utils/QuizManager';
import ProgressBar from '../components/ProgressBar';
import QuestionCard from '../components/QuestionCard';
import Results from './Results';
import MatcherResults from '../pages/MatcherResults';
import questions from '../data/Questions';

import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from '../utils/firebase';


export default function VibeCheckQuiz() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const fullName = searchParams.get('fullName');
  const mode = searchParams.get('mode'); // 'checker' or 'matcher'
  const secondName = searchParams.get('secondName');

  const [quiz, setQuiz] = useState(() => new QuizManager(questions));
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [vibeScores, setVibeScores] = useState(null);
  const [secondVibeScores, setSecondVibeScores] = useState(null);
  const [userNotFound, setUserNotFound] = useState(false);

  useEffect(() => {
    if (!fullName || !mode) {
      navigate('/');
      return;
    }
    if (mode === 'matcher' && !secondName) {
      navigate('/');
      return;
    }
  }, [fullName, mode, secondName, navigate]);

  async function saveResponseToFirebase(userName, scores, dominantVibe) {
    try {
      const userId = userName.toLowerCase();
      await setDoc(doc(db, "responses", userId), {
        userId,
        userName,
        scores,
        dominantVibe,
        mode,
        createdAt: new Date(),
      });
    } catch (error) {
      console.error("Error saving vibe scores:", error);
    }
  }

  async function fetchSecondUserScores(userName) {
    try {
      const userId = userName.toLowerCase();
      const docRef = doc(db, 'responses', userId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data().scores;
      } else {
        setUserNotFound(true);
        return null;
      }
    } catch (error) {
      console.error('Error fetching second user scores:', error);
      setUserNotFound(true);
      return null;
    }
  }

  async function selectOption(option) {
    quiz.selectOption(option);
    if (quiz.hasNextQuestion()) {
      setCurrentQIndex(currentQIndex + 1);
    } else {
      const scores = { ...quiz.getVibeScores() };
      setVibeScores(scores);

      if (mode === 'matcher') {
        const secondScores = await fetchSecondUserScores(secondName);
        if (secondScores) {
          setSecondVibeScores(secondScores);
        }
      }

      setShowResults(true);

      const dominant = Object.entries(scores).reduce((max, entry) =>
        entry[1] > max[1] ? entry : max
      );
      saveResponseToFirebase(fullName, scores, dominant[0]);
    }
  }

  function resetQuiz() {
    setQuiz(new QuizManager(questions));
    setCurrentQIndex(0);
    setShowResults(false);
    setVibeScores(null);
    setSecondVibeScores(null);
    setUserNotFound(false);
  }

  if (userNotFound) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4 py-8">
        <p className="mb-6 text-xl font-semibold text-red-600">User record not present in system.</p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 rounded-full bg-purple-700 text-white font-bold text-lg hover:bg-purple-800 transition"
        >
          Home
        </button>
      </div>
    );
  }

  if (showResults) {
    if (mode === 'matcher') {
      return (
        <MatcherResults
          userOne={{ name: fullName, scores: vibeScores }}
          userTwo={{ name: secondName, scores: secondVibeScores }}
          resetQuiz={resetQuiz}
        />
      );
    }

    const dominantVibe = Object.entries(vibeScores).reduce((max, entry) =>
      entry[1] > max[1] ? entry : max
    );

    return (
      <Results
        fullName={fullName}
        mode={mode}
        vibeScores={vibeScores}
        dominantVibe={dominantVibe}
        resetQuiz={resetQuiz}
      />
    );
  }

  const currentQuestion = quiz.getCurrentQuestion();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4 py-8">
      <div className="w-full max-w-2xl space-y-6">
        <h2 className="text-3xl font-extrabold text-purple-700 mb-6 text-center select-none">
 🤔 What is your Vibe? 🤔
</h2>
        <ProgressBar current={currentQIndex} total={questions.length} />
        {currentQuestion ? (
          <QuestionCard question={currentQuestion} onSelect={selectOption} />
        ) : (
          <p>Loading question...</p>
        )}
      </div>
    </div>
  );
}
