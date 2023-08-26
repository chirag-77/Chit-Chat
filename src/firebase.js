import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPmyTgqY24PC4l0-gAgxBnaGPrRLwm1pc",
  authDomain: "chit-chat-ae952.firebaseapp.com",
  projectId: "chit-chat-ae952",
  storageBucket: "chit-chat-ae952.appspot.com",
  messagingSenderId: "353959118388",
  appId: "1:353959118388:web:d023f74c6646e89dc66c61"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
