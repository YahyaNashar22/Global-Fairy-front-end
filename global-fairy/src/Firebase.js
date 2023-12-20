// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo70KE6JL8fPlJOoZAKD7gB-qADbFZgQk",
  authDomain: "global-fairy.firebaseapp.com",
  projectId: "global-fairy",
  storageBucket: "global-fairy.appspot.com",
  messagingSenderId: "14014845525",
  appId: "1:14014845525:web:45de806a4005cfce173adc",
  measurementId: "G-LP507W9W8Z",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
