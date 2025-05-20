import React from 'react';
import { useNavigate } from 'react-router-dom';

function calculateCompatibility(scores1, scores2) {
  const keys = Object.keys(scores1);
  let diffSum = 0;
  keys.forEach((k) => {
    diffSum += Math.abs(scores1[k] - (scores2[k] || 0));
  });
  const maxDiff = keys.length * 5; // max difference assuming scale 0-5
  return Math.round(((maxDiff - diffSum) / maxDiff) * 100);
}

export default function MatcherResults({ userOne, userTwo, resetQuiz }) {
  const navigate = useNavigate();

  if (!userOne?.scores || !userTwo?.scores) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-purple-300 via-pink-300 to-yellow-300">
        <button
          onClick={() => navigate('/')}
          className="absolute top-4 left-4 px-4 py-2 rounded-full bg-white shadow-md text-gray-700 font-semibold hover:bg-gray-100 transition"
        >
          Home
        </button>
        <p className="text-xl font-semibold">Loading user vibe scores or missing data...</p>
        <button
          onClick={resetQuiz}
          className="mt-6 px-8 py-3 rounded-full bg-purple-700 text-white font-bold text-lg hover:bg-purple-800 transition"
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  const initialCompatibility = calculateCompatibility(userOne.scores, userTwo.scores);
  const compatibility = Math.max(initialCompatibility, 0);


  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center p-8 bg-gradient-to-br from-purple-300 via-pink-300 to-yellow-300">
      {/* Home Button Top Left */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 px-4 py-2 rounded-full bg-white shadow-md text-gray-700 font-semibold hover:bg-gray-100 transition"
      >
        Home
      </button>

      <h2 className="text-4xl font-bold mb-6">✨ Vibe Matcher Results ✨</h2>

      <div className="flex flex-col sm:flex-row gap-8 mb-8 max-w-3xl w-full justify-center items-center">
        {[userOne, userTwo].map(({ name, scores }) => (
          <div key={name} className="bg-white p-6 rounded-lg shadow-md w-full max-w-xs">
            <h3 className="text-2xl font-semibold mb-4">{name}</h3>
            <ul className="space-y-2">
              {Object.entries(scores).map(([vibe, val]) => (
                <li key={vibe} className="flex justify-between capitalize">
                  <span>{vibe}</span>
                  <span>{val}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center mb-8">
        <p className="text-3xl font-bold">Compatibility Score:</p>
        <p className="text-5xl font-extrabold text-purple-700">{compatibility}%</p>
      </div>

      <button
        onClick={resetQuiz}
        className="px-8 py-3 rounded-full bg-purple-700 text-white font-bold text-lg hover:bg-purple-800 transition"
      >
        Restart Quiz
      </button>
    </div>
  );
}
