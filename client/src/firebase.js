// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-7f8e9.firebaseapp.com",
  projectId: "mern-blog-7f8e9",
  storageBucket: "mern-blog-7f8e9.appspot.com",
  messagingSenderId: "92902526875",
  appId: "1:92902526875:web:96e73aa4d192d1bdeb1b3e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
