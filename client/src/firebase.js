// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tolet360-rentalsolution.firebaseapp.com",
  projectId: "tolet360-rentalsolution",
  storageBucket: "tolet360-rentalsolution.firebasestorage.app",
  messagingSenderId: "726873718106",
  appId: "1:726873718106:web:6ce81fab8864abdfd90763"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);