import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDbzwzjHKE_ol6RPjQMCqFy8ERjuKhcrls",
  authDomain: "crwn-db-9461c.firebaseapp.com",
  projectId: "crwn-db-9461c",
  storageBucket: "crwn-db-9461c.appspot.com",
  messagingSenderId: "661202805061",
  appId: "1:661202805061:web:e832c583b84e2dc01cde2c"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;