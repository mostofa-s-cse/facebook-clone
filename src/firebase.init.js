// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNJaAUYgt53AwjhmN_yis1mg99akElsMU",
  authDomain: "facebook-2fb.firebaseapp.com",
  databaseURL: "https://facebook-2fb-default-rtdb.firebaseio.com",
  projectId: "facebook-2fb",
  storageBucket: "facebook-2fb.appspot.com",
  messagingSenderId: "67135922452",
  appId: "1:67135922452:web:c050aecda2d22df4b32201",
  measurementId: "G-SCV6M2BKE0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;