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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (e) {
      console.log('error creating user', e.message)
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;