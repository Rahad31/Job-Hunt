// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGJW3EdXlEkQWXLdut3xc2_WbB3OGmTKs",
  authDomain: "tech-bd-7342b.firebaseapp.com",
  projectId: "tech-bd-7342b",
  storageBucket: "tech-bd-7342b.appspot.com",
  messagingSenderId: "223259233124",
  appId: "1:223259233124:web:4031d72b2f67776c434871",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
