import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NameInput from '../components/NameInput';
import ModeSelector from '../components/ModeSelector';

export default function Home() {
  const [name, setName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [mode, setMode] = useState(null);
  const navigate = useNavigate();

  function handleContinue() {
    const trimmedName = name.trim();
    const trimmedSecondName = secondName.trim();

    if (!trimmedName) return;
    if (mode === 'matcher' && !trimmedSecondName) return;

    let url = `/quiz?fullName=${encodeURIComponent(trimmedName)}&mode=${mode}`;
    if (mode === 'matcher') {
      url += `&secondName=${encodeURIComponent(trimmedSecondName)}`;
    }
    navigate(url);
  }

  const isContinueEnabled =
    mode === 'matcher'
      ? name.trim() !== '' && secondName.trim() !== ''
      : mode === 'checker'
      ? name.trim() !== ''
      : false;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-pink-300 via-purple-400 to-indigo-500 px-4">
      <h1 className="text-5xl font-extrabold text-white mb-12 drop-shadow-lg">
        🎉✨Check your Vibe ✨🎉
      </h1>

      <NameInput
        name={name}
        setName={setName}
        label="Enter your full name"
        placeholder="John Doe"
      />

      {mode === 'matcher' && (
        <NameInput
          name={secondName}
          setName={setSecondName}
          label="Enter your friend's full name"
          placeholder="Jane Smith"
        />
      )}

      <ModeSelector name={name} onSelectMode={setMode} />

      <button
        onClick={handleContinue}
        disabled={!isContinueEnabled}
        className={`mt-8 px-8 py-3 rounded-full font-bold text-lg transition ${
          isContinueEnabled
            ? 'bg-white text-purple-700 hover:bg-gray-100 cursor-pointer'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        Continue
      </button>
    </div>
  );
}
