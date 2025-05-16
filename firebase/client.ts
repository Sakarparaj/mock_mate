// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdJJRZPwG0G5AzkS8-EXdB1LskdePKcwk",
  authDomain: "mockmate-a5aa2.firebaseapp.com",
  projectId: "mockmate-a5aa2",
  storageBucket: "mockmate-a5aa2.firebasestorage.app",
  messagingSenderId: "896138957327",
  appId: "1:896138957327:web:3420b28b180ad973c0c97a",
  measurementId: "G-D808PXFE6F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);