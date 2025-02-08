// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA1qD3yzNC7YnK33V0UAFLluogbRo4msB4",
    authDomain: "overol-e.firebaseapp.com",
    projectId: "overol-e",
    storageBucket: "overol-e.firebasestorage.app",
    messagingSenderId: "971261173846",
    appId: "1:971261173846:web:110fff14409bdecd2c9bf7",
    measurementId: "G-RMZ1NLRQLQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // se cambió getAnalitycs por getFirestore para base de datos