// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2dIhX7Jeab503f_SuuLTXtYiOx1tcjMY",
  authDomain: "the-dragon-news-f0831.firebaseapp.com",
  projectId: "the-dragon-news-f0831",
  storageBucket: "the-dragon-news-f0831.firebasestorage.app",
  messagingSenderId: "387220769212",
  appId: "1:387220769212:web:b16f64a12eb88542c603b9",
  measurementId: "G-ZPF637CDSK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
