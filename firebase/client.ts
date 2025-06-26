// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWJmX1z1tU7ykgU2KCe8xV6RGoWoHNoAQ",
  authDomain: "mockmate-3bccc.firebaseapp.com",
  projectId: "mockmate-3bccc",
  storageBucket: "mockmate-3bccc.firebasestorage.app",
  messagingSenderId: "638031368008",
  appId: "1:638031368008:web:8e83879750b1714212ed7d",
  measurementId: "G-0TTGDT170L"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);