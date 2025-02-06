// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-7b5c2.firebaseapp.com",
  projectId: "mern-auth-7b5c2",
  storageBucket: "mern-auth-7b5c2.appspot.com",
  messagingSenderId: "512767350250",
  appId: "1:512767350250:web:09d1381f6a097475cd8e93"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);