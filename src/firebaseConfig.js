import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage'; // Tambahkan impor untuk firebase/storage

const firebaseConfig = {
  apiKey: "AIzaSyBIpyC82b8CER_L-L4oLBNMt087Sv8EZw8",
  authDomain: "rpl-1-ad260.firebaseapp.com",
  projectId: "rpl-1-ad260",
  storageBucket: "rpl-1-ad260.appspot.com",
  messagingSenderId: "985031310326",
  appId: "1:985031310326:web:5024c26eea8679965365d7",
  measurementId: "G-PE79887RCC"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage(); // Inisialisasi Firebase Storage

export default firebase;
