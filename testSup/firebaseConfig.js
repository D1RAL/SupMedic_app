// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getReactNativePersistence, initializeAuth} from 'firebase/auth'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { getFirestore, collection } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwnQFtqapymbXm6WOXv2G-28e3jIWdboE",
  authDomain: "test-supmedic.firebaseapp.com",
  projectId: "test-supmedic",
  storageBucket: "test-supmedic.appspot.com",
  messagingSenderId: "826242145449",
  appId: "1:826242145449:web:eec14243a1676be18c1db8",
  measurementId: "G-1NJ7HDXYN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);

export const UsersRef = collection(db, 'users');
export const roomRef = collection(db, 'rooms');