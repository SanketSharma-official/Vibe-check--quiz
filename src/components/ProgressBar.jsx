import React from "react";

export default function ProgressBar({ current, total }) {
  const progressPercent = ((current + 1) / total) * 100;

  return (
    <div
      style={{
        height: 8,
        backgroundColor: '#DDD6FE', // light purple background
        borderRadius: 4,
        marginBottom: 20,
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${progressPercent}%`,
          backgroundColor: '#5B21B6', // deep purple (purple-800)
          borderRadius: 4,
          transition: 'width 0.4s ease',
        }}
      />
    </div>
  );
}

