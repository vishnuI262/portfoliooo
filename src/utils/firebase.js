// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFAbw3kNdjD8XKlhvd4FWwkEeKN9XdMNY",
  authDomain: "ajay-4.firebaseapp.com",
  projectId: "ajay-4",
  storageBucket: "ajay-4.appspot.com",
  messagingSenderId: "1018285487783",
  appId: "1:1018285487783:web:595135ade70f858643cd82",
  measurementId: "G-MTRYD4HV9F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);