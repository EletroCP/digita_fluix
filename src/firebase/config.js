// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSR_rk5lvjaaTcB98RlTvEfKtf4Y_l06Q",
  authDomain: "digital-flux-66c3e.firebaseapp.com",
  projectId: "digital-flux-66c3e",
  storageBucket: "digital-flux-66c3e.firebasestorage.app",
  messagingSenderId: "571097973356",
  appId: "1:571097973356:web:f502b31b082ca5db028e49",
  measurementId: "G-Q2W7E3DQC5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);