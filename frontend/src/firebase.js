// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTlRURJ66GCRCbgqa1lRfxFn2KDkV2WRA",
  authDomain: "quora-clone-b9f83.firebaseapp.com",
  projectId: "quora-clone-b9f83",
  storageBucket: "quora-clone-b9f83.appspot.com",
  messagingSenderId: "393714445310",
  appId: "1:393714445310:web:c9256b9d66f5e5e9c72eaf",
  measurementId: "G-1YFHVSYJCS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
