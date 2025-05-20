import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VibeCheckQuiz from './pages/VibeCheckQuiz';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<VibeCheckQuiz />} />
    </Routes>
  );
}

export default App;