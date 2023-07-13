import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBSuvPaa2E0BHD2JNr6MkRNG0edql55Y6s",
  authDomain: "aadyaventure.firebaseapp.com",
  projectId: "aadyaventure",
  storageBucket: "aadyaventure.appspot.com",
  messagingSenderId: "483864047538",
  appId: "1:483864047538:web:5fa9c152776a3e35ad3eab",
  measurementId: "G-71Q4K6JKZ6"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const auth = firebase.auth()
const db = firebase.firestore();
export { firebase, storage, db, auth };