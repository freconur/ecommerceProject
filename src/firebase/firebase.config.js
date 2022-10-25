// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
//   GoogleAuthProvider,
//   signInWithPopup,
// } from "firebase/auth";
// import firebase from "firebase/app";
// import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo23GOUMZ8NWlK6TkKD_5TFMFFuFQdw1I",
  authDomain: "ecommerce-eacb4.firebaseapp.com",
  projectId: "ecommerce-eacb4",
  storageBucket: "ecommerce-eacb4.appspot.com",
  messagingSenderId: "197858043536",
  appId: "1:197858043536:web:8d55d12bddfe3e47855a15",
};

// Initialize Firebase
// firebase = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

// const auth = firebase.auth()
// const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
// const signInWithPopup = new firebase.auth.signInWithPopup();

// export { auth, googleAuthProvider, signInWithPopup };
export default app;
