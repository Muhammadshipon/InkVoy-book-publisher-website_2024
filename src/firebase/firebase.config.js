// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4tnO_J_nchyF2byI9a_TC54VT7yZ5kVQ",
  authDomain: "inkvoy-book-publisher-2024.firebaseapp.com",
  projectId: "inkvoy-book-publisher-2024",
  storageBucket: "inkvoy-book-publisher-2024.appspot.com",
  messagingSenderId: "378747476569",
  appId: "1:378747476569:web:5d456be4fa088599ff6f48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
