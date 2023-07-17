import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyClBHlCXTlSzJZbd2VBSns2F_N4yMzc37g",
  authDomain: "aadya-2b01d.firebaseapp.com",
  projectId: "aadya-2b01d",
  storageBucket: "aadya-2b01d.appspot.com",
  messagingSenderId: "49500958596",
  appId: "1:49500958596:web:7634b1c652c90ab8b8f7d1",
  measurementId: "G-VJTCTS45LD"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const auth = firebase.auth()
const db = firebase.firestore();
export { firebase, storage, db, auth };