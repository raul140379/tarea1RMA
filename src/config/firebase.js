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
<<<<<<< HEAD
  apiKey: "AIzaSyDX1C3YCJUGZS6xV4Jbo_GIXRE1cP9lGx8",
  authDomain: "micomidafavorita-7a6d3.firebaseapp.com",
  projectId: "micomidafavorita-7a6d3",
  storageBucket: "micomidafavorita-7a6d3.firebasestorage.app",
  messagingSenderId: "960644148306",
  appId: "1:960644148306:web:44db8f9c41596d1a4e438b",
  measurementId: "G-82MXQG2MDY"
=======
   apiKey: "AIzaSyBXEL6-a6cFoGZ0l2sxyprLpEhmyfRHzmI",
  authDomain: "micomidafavorita-d829a.firebaseapp.com",
  projectId: "micomidafavorita-d829a",
  storageBucket: "micomidafavorita-d829a.firebasestorage.app",
  messagingSenderId: "789684089734",
  appId: "1:789684089734:web:1f8e3fd3887156f4d37207",
  measurementId: "G-62BNC5E8W0"

>>>>>>> b1bcf6b (Inicio nuevo desde mi repositorio)
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);