import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIMx7QLla1GIw41bzd0IyB9lZnmMYN-4I",
  authDomain: "react-auth-633e8.firebaseapp.com",
  projectId: "react-auth-633e8",
  storageBucket: "react-auth-633e8.appspot.com",
  messagingSenderId: "31953986758",
  appId: "1:31953986758:web:56816524cf1db6faa563c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
