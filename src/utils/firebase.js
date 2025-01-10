// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBhxBX07u7d2gUSQOHIOxy2334mrTjNvo",
  authDomain: "netflix-gpt-169a8.firebaseapp.com",
  projectId: "netflix-gpt-169a8",
  storageBucket: "netflix-gpt-169a8.firebasestorage.app",
  messagingSenderId: "293369432013",
  appId: "1:293369432013:web:e5ec29ceb24fc22507a684",
  measurementId: "G-KLJX423T83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);