// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIpyC82b8CER_L-L4oLBNMt087Sv8EZw8",
  authDomain: "rpl-1-ad260.firebaseapp.com",
  projectId: "rpl-1-ad260",
  storageBucket: "rpl-1-ad260.appspot.com",
  messagingSenderId: "985031310326",
  appId: "1:985031310326:web:5024c26eea8679965365d7",
  measurementId: "G-PE79887RCC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Initialize Firebase Firestore
export const db = getFirestore(app);

export default app;
