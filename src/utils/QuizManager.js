// src/util/QuizManager.js
export default class QuizManager {
  constructor(questions) {
    this.questions = questions;
    this.currentQ = 0;
    this.vibeScores = {};

    // Initialize vibeScores keys with 0
    const allVibes = new Set();
    questions.forEach(q =>
      q.options.forEach(opt =>
        Object.keys(opt.vibes).forEach(vibe => allVibes.add(vibe))
      )
    );
    allVibes.forEach(vibe => {
      this.vibeScores[vibe] = 0;
    });
  }

  getCurrentQuestion() {
    return this.questions[this.currentQ];
  }

  selectOption(option) {
    // Add vibes points from selected option
    for (const vibe in option.vibes) {
      this.vibeScores[vibe] += option.vibes[vibe];
    }
    this.currentQ++;
  }

  hasNextQuestion() {
    return this.currentQ < this.questions.length;
  }

  getVibeScores() {
    return this.vibeScores;
  }

  getDominantVibe() {
    return Object.entries(this.vibeScores).reduce((max, entry) =>
      entry[1] > max[1] ? entry : max
    );
  }

  reset() {
    this.currentQ = 0;
    for (const vibe in this.vibeScores) {
      this.vibeScores[vibe] = 0;
    }
  }
}


