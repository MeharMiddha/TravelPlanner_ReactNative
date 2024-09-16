// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPFo2_mXZBnOXXHa4yWeUu4YSWFdfzvzg",
  authDomain: "authentication-2e702.firebaseapp.com",
  projectId: "authentication-2e702",
  storageBucket: "authentication-2e702.appspot.com",
  messagingSenderId: "570320915017",
  appId: "1:570320915017:web:7cfc5fa63516fe5c858d98",
  measurementId: "G-XQY3LYP0BP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app);
const db = getFirestore(app);

export { app, auth, db};
