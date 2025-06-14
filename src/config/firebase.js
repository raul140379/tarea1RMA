// Import the functions you need from the SDKs you need
import '@expo/metro-runtime';
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyBXEL6-a6cFoGZ0l2sxyprLpEhmyfRHzmI",
  authDomain: "micomidafavorita-d829a.firebaseapp.com",
  projectId: "micomidafavorita-d829a",
  storageBucket: "micomidafavorita-d829a.firebasestorage.app",
  messagingSenderId: "789684089734",
  appId: "1:789684089734:web:1f8e3fd3887156f4d37207",
  measurementId: "G-62BNC5E8W0"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);