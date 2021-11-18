// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ0OfY4aCEqMCxgVWVJA1eOdFqpmcmFKA",
  authDomain: "quiz-1c37c.firebaseapp.com",
  projectId: "quiz-1c37c",
  storageBucket: "quiz-1c37c.appspot.com",
  messagingSenderId: "804862489900",
  appId: "1:804862489900:web:d928d96422e273a48ae889"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);
export {app,auth,db} ;