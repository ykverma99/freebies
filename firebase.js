// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdo6qeyLGhyhloTywOwlDGX0LewO7NUsA",
  authDomain: "freebies-5f9d1.firebaseapp.com",
  projectId: "freebies-5f9d1",
  storageBucket: "freebies-5f9d1.appspot.com",
  messagingSenderId: "636432521445",
  appId: "1:636432521445:web:30e46e14f1d4e705b3dc0c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// setup the database
export const db = getFirestore(app);

// collections for this app

export const userRef = collection(db, "users");

// Auth setup
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
