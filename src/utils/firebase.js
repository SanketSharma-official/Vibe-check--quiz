import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdsVsLc_rPDjyR7DS_yyp4w61jvb12dgs",
  authDomain: "vibe-check-quiz-f5a4c.firebaseapp.com",
  projectId: "vibe-check-quiz-f5a4c",
  storageBucket: "vibe-check-quiz-f5a4c.firebasestorage.app",
  messagingSenderId: "755356425722",
  appId: "1:755356425722:web:aa2bdcb7c4578be2935843",
  measurementId: "G-0P4KLVXYTR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
