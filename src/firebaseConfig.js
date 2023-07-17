// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClBHlCXTlSzJZbd2VBSns2F_N4yMzc37g",
  authDomain: "aadya-2b01d.firebaseapp.com",
  projectId: "aadya-2b01d",
  storageBucket: "aadya-2b01d.appspot.com",
  messagingSenderId: "49500958596",
  appId: "1:49500958596:web:7634b1c652c90ab8b8f7d1",
  measurementId: "G-VJTCTS45LD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);