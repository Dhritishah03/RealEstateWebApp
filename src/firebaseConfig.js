// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBysTUbGw8fEDVSqK1cvNWZMwo2zkSUpRg",
  authDomain: "aadyaventures-15e61.firebaseapp.com",
  projectId: "aadyaventures-15e61",
  storageBucket: "aadyaventures-15e61.appspot.com",
  messagingSenderId: "179309954582",
  appId: "1:179309954582:web:93566c250a5d1043549737",
  measurementId: "G-8FPWTS551Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);