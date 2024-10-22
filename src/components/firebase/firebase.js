// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAICO_V6hTp1WoJF2Dq6iTdlU5sJCyqXK0",
  authDomain: "bawarchi-recipe.firebaseapp.com",
  projectId: "bawarchi-recipe",
  storageBucket: "bawarchi-recipe.appspot.com",
  messagingSenderId: "580079677624",
  appId: "1:580079677624:web:87ae607391b4514842444d",
  measurementId: "G-434N0LL9E3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };
