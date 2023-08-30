// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtYCzDeCSOR7umCizt71IEwrUpqkg11e8",
  authDomain: "react-auth-eab06.firebaseapp.com",
  projectId: "react-auth-eab06",
  storageBucket: "react-auth-eab06.appspot.com",
  messagingSenderId: "615694513281",
  appId: "1:615694513281:web:d621bfb917536b20928980"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
