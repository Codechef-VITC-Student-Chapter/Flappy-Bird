import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider,signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCe9jnQ_hwakzp0xQXXxcp6kdpr5OOY3mk",
  authDomain: "flappy-bird-codechef.firebaseapp.com",
  projectId: "flappy-bird-codechef",
  storageBucket: "flappy-bird-codechef.appspot.com",
  messagingSenderId: "292086757103",
  appId: "1:292086757103:web:9b752cc035f33b52810d1a",
  measurementId: "G-36K0VEV71M"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };