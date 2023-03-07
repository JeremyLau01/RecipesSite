import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdeVI-U4kFObRgE7hty-PX2FvqNymAMVE",
  authDomain: "lau-family-recipe-website.firebaseapp.com",
  databaseURL: "https://lau-family-recipe-website-default-rtdb.firebaseio.com",
  projectId: "lau-family-recipe-website",
  storageBucket: "lau-family-recipe-website.appspot.com",
  messagingSenderId: "349765407537",
  appId: "1:349765407537:web:cf3b72bdf716ee201fd610"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

export { db };