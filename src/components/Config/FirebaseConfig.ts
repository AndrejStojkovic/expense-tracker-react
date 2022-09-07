import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);

export const createNewUser = async ({firstName, lastName, email, country, password}: any) => {
  const user = await createUserWithEmailAndPassword(auth, email, password);

  if(!user) return;

  const userRef = await getDoc(doc(db, `/users/${user.user.uid}`));
  
  if(!userRef.exists()) {
    try {
      const newUser = await setDoc(doc(db, `/users/${user.user.uid}`), {
        firstName: firstName,
        lastName: lastName,
        email: email,
        country: country,
        createdAt: new Date(),
        lastPassChange: new Date()
      });
    } catch(err) {
      console.log(err);
    }
  }
}

export const userLogin = async ({email, password}: any) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
  } catch(err) {
    console.log(err);
  }
}