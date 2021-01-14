import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyA9uXZihwy0dtC1hdaz1sSNnL6xJPRDz0E",
  authDomain: "ecommerce-5269a.firebaseapp.com",
  projectId: "ecommerce-5269a",
  storageBucket: "ecommerce-5269a.appspot.com",
  messagingSenderId: "830129486740",
  appId: "1:830129486740:web:265564f8ffb716f02aad81",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app(); // if already initialized, use that one
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log(error);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
