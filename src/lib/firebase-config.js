import { initializeApp } from 'firebase/app';
import {
  getAuth, GoogleAuthProvider, signInWithPopup,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA3x-lBUt7xdBuoLWNbjqqkWvIhvQhkVyI',
  authDomain: 'challenge-app-c4115.firebaseapp.com',
  projectId: 'challenge-app-c4115',
  storageBucket: 'challenge-app-c4115.appspot.com',
  messagingSenderId: '63333558787',
  appId: '1:63333558787:web:d25f4b8ae72b65c6ad7c36',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const googlePop = signInWithPopup;
export const db = getFirestore();
export const storage = getStorage(app);
