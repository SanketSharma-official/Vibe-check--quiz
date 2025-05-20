import React from 'react';

export default function NameInput({ name, setName, label = "Enter your full name", placeholder = "John Doe" }) {
  return (
    <div className="mb-8 w-full max-w-md">
      <label
        htmlFor="nameInput"
        className="block mb-2 text-lg font-semibold text-gray-700"
      >
        {label}
      </label>
      <input
        id="nameInput"
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg"
        autoComplete="off"
      />
    </div>
  );
}
