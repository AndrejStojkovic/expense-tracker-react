import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore, collection, doc, getDoc, setDoc } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.APP_FIREBASE_KEY,
  authDomain: process.env.APP_FIREBASE_DOMAIN,
  projectId: process.env.APP_FIREBASE_PID,
  storageBucket: process.env.APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.APP_FIREBASE_SENDER_ID,
  appId: process.env.APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);

export const createUserDocument = async ({user, userData}: any) => {
  if(!user) return;

  const collectionRef = collection(db, 'users');
  const docRef = doc(db, 'users', user.uid);
  const userRef = await getDoc(docRef);
  
  if(!userRef.exists()) {
    try {
      await setDoc(doc(collectionRef, user.uid), {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: user,
        country: userData.country,
        createdAt: new Date(),
        lastPassChange: new Date()
      })
    } catch(err) {
      console.log(err);
    }
  }
}