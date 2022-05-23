import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5ghZSS2OylR3QhgJ6ahzitFA7Ml7CHR8",
  authDomain: "react-clothing-shop-db.firebaseapp.com",
  projectId: "react-clothing-shop-db",
  storageBucket: "react-clothing-shop-db.appspot.com",
  messagingSenderId: "4299841438",
  appId: "1:4299841438:web:8155af72d8331326a3808f",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
        return await setDoc(userDocRef, {
            displayName,
            email,
            createdAt
        });
    } catch (err) {
      console.log('error creating user', err);
    }  
  }

  return userDocRef;
};
