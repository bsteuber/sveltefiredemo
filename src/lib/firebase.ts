import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDOh7ldvVBIMvQ3064t4JlblpF1E_PtIY4",
    authDomain: "sveltefiredemo-123.firebaseapp.com",
    projectId: "sveltefiredemo-123",
    storageBucket: "sveltefiredemo-123.appspot.com",
    messagingSenderId: "220732468284",
    appId: "1:220732468284:web:54ac2a7de5a4b767ed2739",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
