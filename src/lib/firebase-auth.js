/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import {
  setDoc,
  doc,
  collection,
  getDoc,

} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  auth, db, googlePop, provider,
} from './firebase-config';

export {
  getDocs,
  collection,
  doc,
  deleteDoc,
  addDoc,
  query,
  orderBy,
  getDoc,
  updateDoc,
  initializeFirestore,
} from 'firebase/firestore';

export {
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signOut,
} from 'firebase/auth';

// google login
export const googleSignIn = async (app) => {
  const navigate = useNavigate();

  console.log(app);
  await googlePop(auth, provider).then((isAuth) => {
    navigate('/ShowActivity');
    console.log(isAuth);
  });
};

// creating a collection with users data---------------------------------//
export async function registeredUser(uid, name, email, adress, phone, city, state) {
  try {
    const userCollection = collection(db, 'users');
    console.log(uid);
    console.log(name);
    console.log(email);
    console.log(adress);
    console.log(phone);
    console.log(city);
    console.log(state);
    await setDoc(doc(userCollection, uid), {
      uid,
      name,
      email,
      adress,
      phone,
      city,
      state,

    });
  } catch (error) {
    console.log('user dont saved', error);
  }
}

// obteining data from the collection of a user------------------------//
export async function userExist(uid) {
  const docRef = doc(db, 'users', uid);
  const res = await getDoc(docRef);
  console.log(res);
  return res.exists();
}

// Register with mail and password---------------------------------------//
export function register(username, email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// signin with mail and password-----------------------------------------//
export const login = (setErrorEmail, setErrorPassword, email, password) => {
  setErrorEmail('');
  setErrorPassword('');
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const { user } = userCredential;
    })
    .catch((error) => {
      console.log(error.message);
      if (error.code === 'auth/invalid-email') {
        console.log(error.code);
        setErrorEmail('Invalid email');
      } else if (error.code === 'auth/wrong-password') {
        console.log(error.code);
        setErrorPassword('Invalid password');
      } else if (error.code === 'auth/internal-error') {
        console.log(error.code);
        setErrorPassword('Enter a password');
      } else if (error.code === 'auth/user-not-found') {
        console.log(error.code);
        setErrorEmail('User not found');
      }
    });
};

// logOut---------------------------------------------------------------------//
export function logOut() {
  return signOut(auth);
}

// ----- HOOK USEAUTH

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    if (!unsub) {
      navigate('/login');
    }
    return unsub;
  });
  return currentUser;
}
