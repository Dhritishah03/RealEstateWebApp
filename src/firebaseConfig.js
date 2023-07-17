import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/auth';

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

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const auth = firebase.auth()
const db = firebase.firestore();
export { firebase, storage, db, auth };