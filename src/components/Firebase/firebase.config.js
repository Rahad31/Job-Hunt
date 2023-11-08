

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFq0ECHSlkfLtuLq1XBcW0utEgEgwHWgg",
  authDomain: "job-hunt-4b187.firebaseapp.com",
  projectId: "job-hunt-4b187",
  storageBucket: "job-hunt-4b187.appspot.com",
  messagingSenderId: "520108573674",
  appId: "1:520108573674:web:dad8cf8b73fae4f0ba6893",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
