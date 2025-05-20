import React from 'react';

export default function QuestionCard({ question, onSelect }) {
  if (!question) return null;

  return (
    <div className="bg-white shadow-2xl rounded-xl p-6 space-y-6 transition-all duration-300">

      {/* The main question */}
      <h2 className="text-2xl font-bold text-purple-800">
        {question.question}
      </h2>

      {/* Options */}
      <div className="grid gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelect(option)}
            className="w-full text-left px-6 py-4 bg-purple-100 hover:bg-purple-200 text-purple-800 font-medium rounded-lg border border-purple-300 shadow-sm transition-all duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}
