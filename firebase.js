// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNkFa3bOPn7JX0rCLAipYRb88FBeyLnqQ",
  authDomain: "reciept-scanner-8e8ee.firebaseapp.com",
  projectId: "reciept-scanner-8e8ee",
  storageBucket: "reciept-scanner-8e8ee.appspot.com",
  messagingSenderId: "889068303294",
  appId: "1:889068303294:web:c700ccb0faf36693e23fef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};