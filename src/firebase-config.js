// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtsEYrg_DYkGW5Eq-1P5irzRfpTcS-uMw",
  authDomain: "chatapp-62c93.firebaseapp.com",
  projectId: "chatapp-62c93",
  storageBucket: "chatapp-62c93.appspot.com",
  messagingSenderId: "254967728916",
  appId: "1:254967728916:web:d5f2c1c2aeda493858d001",
  measurementId: "G-Y9BW53QZHM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);