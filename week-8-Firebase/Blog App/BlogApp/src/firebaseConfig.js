// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1cJSCrkqvaSONxIbGRaP9-e1czEQz4zE",
  authDomain: "blogapp-a6e2b.firebaseapp.com",
  projectId: "blogapp-a6e2b",
  storageBucket: "blogapp-a6e2b.firebasestorage.app",
  messagingSenderId: "697652056979",
  appId: "1:697652056979:web:a3d6fccba7ea14c0eace66",
  measurementId: "G-9EFL4F3LKQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);