// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getauth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLVc3eY_nDJIN456OtwK-BNzmLZPGV6xI",
  authDomain: "flappy-bird-73f3e.firebaseapp.com",
  projectId: "flappy-bird-73f3e",
  storageBucket: "flappy-bird-73f3e.appspot.com",
  messagingSenderId: "280886096397",
  appId: "1:280886096397:web:d7966ad1c7bd2e52979b44",
  measurementId: "G-Q7LT2VR698"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getauth(app);

export{app,auth};