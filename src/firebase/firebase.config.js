// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8zuIsRgHzPD5QSpcK36IFzH_pu0CpnJ0",
  authDomain: "ema-jon-with-firebase-au-2e35c.firebaseapp.com",
  projectId: "ema-jon-with-firebase-au-2e35c",
  storageBucket: "ema-jon-with-firebase-au-2e35c.appspot.com",
  messagingSenderId: "78017208141",
  appId: "1:78017208141:web:bde51b5ee6e952c5cde104"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;