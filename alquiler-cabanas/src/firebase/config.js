// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlcvMXBGHHvl1X6mynrNfuoZ753lL06Gc",
  authDomain: "alquiler-de-cabanas.firebaseapp.com",
  projectId: "alquiler-de-cabanas",
  storageBucket: "alquiler-de-cabanas.appspot.com",
  messagingSenderId: "66089263857",
  appId: "1:66089263857:web:4c2f6e8b166232ba2c3f50",
  measurementId: "G-66EDHNEYJC"
};

// Initialize Firebase
initializeApp(firebaseConfig);