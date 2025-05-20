const questions = [
  {
    question: "What's your ideal weekend?",
    options: [
      { text: "Staying in with a warm drink", vibes: { Calm: 3, Thoughtful: 1 } },
      { text: "Adventure sports or a hike", vibes: { Energetic: 3, Playful: 1 } },
      { text: "Watching emotional films", vibes: { Moody: 3, Thoughtful: 2 } },
      { text: "Working on a passion project", vibes: { Serious: 3, Thoughtful: 2 } },
    ],
  },
  {
    question: "Choose a type of weather you enjoy most:",
    options: [
      { text: "Rainy and quiet", vibes: { Moody: 3, Calm: 1 } },
      { text: "Sunny and breezy", vibes: { Energetic: 2, Playful: 2 } },
      { text: "Snowy and peaceful", vibes: { Calm: 3, Thoughtful: 1 } },
      { text: "Crisp and focused winter air", vibes: { Serious: 3, Thoughtful: 2 } },
    ],
  },
  {
    question: "How do you usually approach a tough situation?",
    options: [
      { text: "Take a deep breath and stay calm", vibes: { Calm: 3, Thoughtful: 2 } },
      { text: "Jump in and take control", vibes: { Energetic: 3, Serious: 1 } },
      { text: "Let yourself feel the emotions", vibes: { Moody: 3, Calm: 1 } },
      { text: "Analyze it rationally", vibes: { Serious: 3, Thoughtful: 2 } },
    ],
  },
  {
    question: "Pick a soundtrack for your life:",
    options: [
      { text: "Lo-fi beats", vibes: { Calm: 3, Thoughtful: 1 } },
      { text: "High-energy EDM", vibes: { Energetic: 3, Playful: 1 } },
      { text: "Melancholic piano", vibes: { Moody: 3, Thoughtful: 2 } },
      { text: "Instrumental classical", vibes: { Serious: 3, Thoughtful: 2 } },
    ],
  },
  {
    question: "What do people usually say about you?",
    options: [
      { text: "You're super chill", vibes: { Calm: 3, Playful: 1 } },
      { text: "You're full of energy", vibes: { Energetic: 3, Playful: 2 } },
      { text: "You feel deeply", vibes: { Moody: 3, Thoughtful: 2 } },
      { text: "You're very driven", vibes: { Serious: 3, Thoughtful: 2 } },
    ],
  },
  {
    question: "How do you like to learn new things?",
    options: [
      { text: "At my own pace, relaxed", vibes: { Calm: 3, Thoughtful: 2 } },
      { text: "Hands-on and fast-paced", vibes: { Energetic: 3, Playful: 1 } },
      { text: "By feeling and reflecting deeply", vibes: { Moody: 3, Thoughtful: 3 } },
      { text: "By structured study and research", vibes: { Serious: 3, Thoughtful: 3 } },
    ],
  },
  {
    question: "Your workspace vibe is:",
    options: [
      { text: "Minimal and clutter-free", vibes: { Calm: 3, Serious: 1 } },
      { text: "Busy and lively", vibes: { Energetic: 3, Playful: 2 } },
      { text: "Creative chaos", vibes: { Moody: 3, Playful: 1 } },
      { text: "Organized and efficient", vibes: { Serious: 3, Thoughtful: 2 } },
    ],
  },
  {
    question: "Your favorite type of movie?",
    options: [
      { text: "Feel-good dramas", vibes: { Calm: 3, Thoughtful: 2 } },
      { text: "Action and adventure", vibes: { Energetic: 3, Playful: 2 } },
      { text: "Romantic or emotional stories", vibes: { Moody: 3, Thoughtful: 3 } },
      { text: "Documentaries and biopics", vibes: { Serious: 3, Thoughtful: 3 } },
    ],
  },
  {
    question: "How do you recharge your energy?",
    options: [
      { text: "Quiet reading or meditation", vibes: { Calm: 3, Thoughtful: 2 } },
      { text: "Exercise or dance", vibes: { Energetic: 3, Playful: 2 } },
      { text: "Journaling or artistic expression", vibes: { Moody: 3, Thoughtful: 3 } },
      { text: "Planning and organizing", vibes: { Serious: 3, Thoughtful: 2 } },
    ],
  },
  {
    question: "Choose your ideal work environment:",
    options: [
      { text: "Peaceful and distraction-free", vibes: { Calm: 3, Serious: 1 } },
      { text: "Fast-paced and collaborative", vibes: { Energetic: 3, Playful: 2 } },
      { text: "Creative and expressive", vibes: { Moody: 3, Playful: 2 } },
      { text: "Structured and goal-oriented", vibes: { Serious: 3, Thoughtful: 2 } },
    ],
  },
];
export default questions;