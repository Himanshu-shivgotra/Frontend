// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
    apiKey: "AIzaSyBKOPU9vhiyh5sDjTAhuAM75S28VjOeq1E",
    authDomain: "seller-website-9e0b9.firebaseapp.com",
    projectId: "seller-website-9e0b9",
    storageBucket: "seller-website-9e0b9.appspot.com",
    messagingSenderId: "662921821741",
    appId: "1:662921821741:web:6521dae5abe717c04d42a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app)
export const googleProvider = new GoogleAuthProvider();

export default app;