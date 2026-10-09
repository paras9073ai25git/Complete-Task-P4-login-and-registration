
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDtgIXRSITrTJ9JKB24TuPoCsXVjC7a4YQ",
  authDomain: "dev-deakin-p4-1d91e.firebaseapp.com",
  projectId: "dev-deakin-p4-1d91e",
  storageBucket: "dev-deakin-p4-1d91e.firebasestorage.app",
  messagingSenderId: "311057560769",
  appId: "1:311057560769:web:875671636ac28993bf5040",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);