// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth} from 'firebase/auth';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTUfwj1mTTcIw0V7U96l_7K4GPfvhTLio",
  authDomain: "assigmentreactnative-ce3fb.firebaseapp.com",
  databaseURL: "https://assigmentreactnative-ce3fb-default-rtdb.firebaseio.com",
  projectId: "assigmentreactnative-ce3fb",
  storageBucket: "assigmentreactnative-ce3fb.appspot.com",
  messagingSenderId: "820046520677",
  appId: "1:820046520677:web:61186c5a967cdb632c018c",
  measurementId: "G-P88XVQXWWR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const database = getDatabase(app);