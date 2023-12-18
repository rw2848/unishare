// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCfGDxcY4J822P1VHetVJ_FqOO3porWJhM",
    authDomain: "unishare-d6d29.firebaseapp.com",
    projectId: "unishare-d6d29",
    storageBucket: "unishare-d6d29.appspot.com",
    messagingSenderId: "197176799243",
    appId: "1:197176799243:web:9d4a96a0589f52aa10970e",
    measurementId: "G-0J74ZGY1V2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;