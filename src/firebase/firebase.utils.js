import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDhchrntRcQmplmn7bbP0uqpQ5izHDzCMI",
    authDomain: "my-space-19a5f.firebaseapp.com",
    projectId: "my-space-19a5f",
    storageBucket: "my-space-19a5f.appspot.com",
    messagingSenderId: "944382195264",
    appId: "1:944382195264:web:031e9c63f8b481334a51a5",
    measurementId: "G-HKTEGBZH7D"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get(); //retreieved the info

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ //sent information to the db
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
//const providers = new firebase.auth.FacebookAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
//providers.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
//export const signInWithFacebook = () => auth.signInWithPopup(providers);

export default firebase;