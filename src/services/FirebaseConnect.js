// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyCgp_WZLv_xlb8i5yFnxcN2psI8HVUcM1Q",
  authDomain: "atitusgamer-d839f.firebaseapp.com",
  projectId: "atitusgamer-d839f",
  storageBucket: "atitusgamer-d839f.appspot.com",
  messagingSenderId: "516711664625",
  appId: "1:516711664625:web:95b1ddac6ba1b21cff9250",
  measurementId: "G-3KE2EL3FXJ"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);