import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebaseConfig';
import { collection, addDoc, getFirestore } from 'firebase/firestore';

export const firebaseApp = initializeApp(firebaseConfig);

export const addEmail = async (email: string) => {
  const db = getFirestore();

  await addDoc(collection(db, 'emails'), {
    email,
  });
};
