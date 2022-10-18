// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASEE_API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: "portfolio-e611c",
  storageBucket: "portfolio-e611c.appspot.com",
  messagingSenderId: "1065376170400",
  appId: process.env.APP_ID,
  measurementId: "G-8CDE465TWQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;