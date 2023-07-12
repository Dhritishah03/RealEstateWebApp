// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSuvPaa2E0BHD2JNr6MkRNG0edql55Y6s",
  authDomain: "aadyaventure.firebaseapp.com",
  projectId: "aadyaventure",
  storageBucket: "aadyaventure.appspot.com",
  messagingSenderId: "483864047538",
  appId: "1:483864047538:web:5fa9c152776a3e35ad3eab",
  measurementId: "G-71Q4K6JKZ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);