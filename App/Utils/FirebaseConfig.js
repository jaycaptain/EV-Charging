// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV0fxaUrcckAZP-cyTMJzRg9rl8Z51Xt4",
  authDomain: "ev-charging-28942.firebaseapp.com",
  projectId: "ev-charging-28942",
  storageBucket: "ev-charging-28942.firebasestorage.app",
  messagingSenderId: "736786324389",
  appId: "1:736786324389:web:600d12b3f6eaf4e16be64c",
  measurementId: "G-G4B0LZHRDQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);