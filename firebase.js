// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9Sd17VP_XxBdLOMVFSUbWO8jwYyAn50M",
  authDomain: "portfolio-e611c.firebaseapp.com",
  projectId: "portfolio-e611c",
  storageBucket: "portfolio-e611c.appspot.com",
  messagingSenderId: "1065376170400",
  appId: "1:1065376170400:web:6033dbe73be177b9e3a4c5",
  measurementId: "G-8CDE465TWQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;