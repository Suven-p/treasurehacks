// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKrb8g54OFZea_c3jbLC-jH00U10sFzx4",
  authDomain: "treasurehacks3.firebaseapp.com",
  projectId: "treasurehacks3",
  storageBucket: "treasurehacks3.appspot.com",
  messagingSenderId: "534658337861",
  appId: "1:534658337861:web:a4370d868836325defe72c",
  measurementId: "G-T49ZXWRBDG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);