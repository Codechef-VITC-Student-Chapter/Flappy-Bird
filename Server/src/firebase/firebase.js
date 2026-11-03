import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider,signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDLVc3eY_nDJIN456OtwK-BNzmLZPGV6xI",
  authDomain: "flappy-bird-73f3e.firebaseapp.com",
  projectId: "flappy-bird-73f3e",
  storageBucket: "flappy-bird-73f3e.appspot.com",
  messagingSenderId: "280886096397",
  appId: "1:280886096397:web:d7966ad1c7bd2e52979b44",
  measurementId: "G-Q7LT2VR698"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };