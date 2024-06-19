// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import { getAuth } from "firebase/auth";
 import { getFirestore } from "firebase/firestore";

 const firebaseConfig = {
  apiKey: "AIzaSyASLfylEggxS0q7iYeuhLm-0bEN7J0X7lI",
  authDomain: "app-tema.firebaseapp.com",
  projectId: "app-tema",
  storageBucket: "app-tema.appspot.com",
  messagingSenderId: "708369040139",
  appId: "1:708369040139:web:5ddcd42ad7633bc71f180e",
  measurementId: "G-7P70HP2NKF"
};


const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app); 
export const db = getFirestore(app);