// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1g4nQTULgL1O9I5aQXrLV4Ia8SqkH6uU",
  authDomain: "park-baysync-projecktbits.firebaseapp.com",
  databaseURL:
    "https://park-baysync-projecktbits-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "park-baysync-projecktbits",
  storageBucket: "park-baysync-projecktbits.appspot.com",
  messagingSenderId: "390836037112",
  appId: "1:390836037112:web:958b3361638e0800e5a20d",
  measurementId: "G-B543YYJNLM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage();
const database = getDatabase(app);

export { database };
