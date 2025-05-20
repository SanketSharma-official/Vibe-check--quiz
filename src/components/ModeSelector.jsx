import React from 'react';

export default function ModeSelector({ onSelectMode, disabled }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 mt-8 justify-center w-full max-w-md">
      <button
        onClick={() => onSelectMode('checker')}
        disabled={disabled}
        className="
          flex-1 px-8 py-4 
          bg-yellow-400 text-purple-900 font-bold 
          rounded-full shadow-lg 
          hover:bg-yellow-500 hover:scale-105 
          transition transform 
          disabled:opacity-50 disabled:cursor-not-allowed
        "
      >
        Vibe Checker
      </button>

      <button
        onClick={() => onSelectMode('matcher')}
        disabled={disabled}
        className="
          flex-1 px-8 py-4 
          bg-purple-700 text-yellow-300 font-bold 
          rounded-full shadow-lg 
          hover:bg-purple-800 hover:scale-105 
          transition transform 
          disabled:opacity-50 disabled:cursor-not-allowed
        "
      >
        Vibe Matcher
      </button>
    </div>
  );
}
