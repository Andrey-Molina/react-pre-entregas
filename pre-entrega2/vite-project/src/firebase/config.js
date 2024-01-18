// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAX0TDRuXpq-gWXDy1RKCTfBtXWGa6H0Bs",
    authDomain: "react-js-entrega-final.firebaseapp.com",
    projectId: "react-js-entrega-final",
    storageBucket: "react-js-entrega-final.appspot.com",
    messagingSenderId: "237936436688",
    appId: "1:237936436688:web:e6b42941d1df1bd87545d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore( app )