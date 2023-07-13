// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV-KqctjpkX572AqOdtC9Hi25ZxpXX3qY",
  authDomain: "aadyaventures-13604.firebaseapp.com",
  databaseURL: "https://aadyaventures-13604-default-rtdb.firebaseio.com",
  projectId: "aadyaventures-13604",
  storageBucket: "aadyaventures-13604.appspot.com",
  messagingSenderId: "849608147196",
  appId: "1:849608147196:web:9dffb94dd85a648ad25779",
  measurementId: "G-5R0YB1FBL7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);