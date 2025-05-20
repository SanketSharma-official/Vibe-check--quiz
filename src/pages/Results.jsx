import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import VibePieChart from '../components/PieChart';
import ShareButton from '../components/ShareButton';

import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../utils/firebase';
const COLORS = {
  Calm: '#6EE7B7',        // mint green
  Energetic: '#F59E0B',   // amber/orange
  Moody: '#F87171',       // soft red
  Serious: '#374151',     // dark slate
  Playful: '#60A5FA',     // bright blue
  Thoughtful: '#A78BFA',  // soft purple
};

export default function Results({ vibeScores, dominantVibe, resetQuiz, userId }) {
  const pieData = Object.entries(vibeScores).map(([name, value]) => ({
    name,
    value,
  }));

  const navigate = useNavigate();

  useEffect(() => {
    async function saveScores() {
      try {
        await addDoc(collection(db, "responses"), {
          userId: userId || null,
          scores: vibeScores,
          dominantVibe: dominantVibe[0],
          createdAt: serverTimestamp(),
        });
      } catch (error) {
        console.error("Error saving vibe scores:", error);
      }
    }
    saveScores();
  }, [vibeScores, dominantVibe, userId]);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-evenly px-6 py-12 bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 relative overflow-hidden"
      style={{ fontFamily: "'Baloo 2', cursive", color: '#333' }}
    >
      {/* Home button fixed top-left */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-4 left-4 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-full font-semibold shadow-lg transition-transform duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500"
        aria-label="Go Home"
      >
        🏠 Home
      </button>

      <h2 className="text-4xl font-extrabold text-center mb-2 select-none">
        ✨ Your Vibe Results ✨
      </h2>

      <h3
        className="text-3xl font-bold mb-6 capitalize text-center select-none"
        style={{ color: COLORS[dominantVibe[0]] || '#4C1D95' }}
      >
        Your dominant vibe is: {dominantVibe[0]}
      </h3>

      {/* Pie chart container */}
      <div
        className="w-[280px] h-[280px] rounded-full bg-white shadow-xl flex justify-center items-center p-3 transition-transform duration-300 hover:scale-[1.05]"
        style={{ boxShadow: `0 0 18px 6px ${COLORS[dominantVibe[0]]}` }}
      >
        <VibePieChart
          pieData={pieData}
          dominantVibe={dominantVibe[0]}
          COLORS={COLORS}
          width={240}
          height={240}
        />
      </div>

      {/* Vibe tags with their distinct colors */}
      <div className="flex flex-wrap justify-center gap-4 max-w-xs mt-6 select-none">
        {Object.entries(vibeScores).map(([vibe]) => (
          <div
            key={vibe}
            className="flex items-center gap-2 bg-white rounded-full px-4 py-1 shadow-md text-sm font-semibold"
            style={{ color: COLORS[vibe] }}
          >
            <span
              className="inline-block w-4 h-4 rounded-full"
              style={{ backgroundColor: COLORS[vibe] }}
              aria-label={`${vibe} color indicator`}
            />
            {vibe}
          </div>
        ))}
      </div>

      <p className="text-lg my-6 select-none font-medium">
        Thanks for taking the vibe check! 🎈
      </p>

      <div className="flex flex-col gap-4 items-center w-full max-w-xs">
        <button
          onClick={resetQuiz}
          className="w-full py-3 rounded-full font-bold text-white text-lg shadow-lg transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-purple-400"
          style={{ backgroundColor: COLORS[dominantVibe[0]] }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        >
          🔄 Restart Quiz
        </button>

        <ShareButton dominantVibe={dominantVibe[0]} />
      </div>
    </div>
  );
}
