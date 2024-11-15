// src/pages/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB1XZrtRz_MiI9EQjP_s1qb7H9zWbjDtg",
  authDomain: "e-commerce-584a8.firebaseapp.com",
  projectId: "e-commerce-584a8",
  storageBucket: "e-commerce-584a8.appspot.com", // Fixed the typo here
  messagingSenderId: "190029244728",
  appId: "1:190029244728:web:674a42e427a773e20b39cd",
  measurementId: "G-MHBMCWYFES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore

export { auth, db };
