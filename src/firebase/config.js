// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChSz-au3k8HVeNDHFsuCmBctkDGvb9XRY",
  authDomain: "reacts-js-proyecto.firebaseapp.com",
  projectId: "reacts-js-proyecto",
  storageBucket: "reacts-js-proyecto.appspot.com",
  messagingSenderId: "635532911932",
  appId: "1:635532911932:web:41472d2d111bc351c0ea39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)