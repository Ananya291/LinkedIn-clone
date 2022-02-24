import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBbzMV960WxwDLFeTa2G5z7JQm0b5T8B7I",
  authDomain: "linkedin-clone-ea4d1.firebaseapp.com",
  projectId: "linkedin-clone-ea4d1",
  storageBucket: "linkedin-clone-ea4d1.appspot.com",
  messagingSenderId: "695830274262",
  appId: "1:695830274262:web:17349682085c21d58e2977",
  measurementId: "G-991NRSV027"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebaseApp.auth();

export {auth};
export default db;