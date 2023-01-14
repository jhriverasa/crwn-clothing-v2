import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  //signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "API_KEY_HERE",
  authDomain: "crwn-clothing-db-b0250.firebaseapp.com",
  projectId: "crwn-clothing-db-b0250",
  storageBucket: "crwn-clothing-db-b0250.appspot.com",
  messagingSenderId: "776083912859",
  appId: "1:776083912859:web:0cea54c7d09eea4353ee3e",
};

//const firebaseApp = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};
