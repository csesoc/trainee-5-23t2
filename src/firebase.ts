// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq2zTVreDCD7NgO32LqavdjwsCPoeF61E",
  authDomain: "trainee5-auth.firebaseapp.com",
  projectId: "trainee5-auth",
  storageBucket: "trainee5-auth.appspot.com",
  messagingSenderId: "686502859091",
  appId: "1:686502859091:web:fb3a871103c79a368311a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth }