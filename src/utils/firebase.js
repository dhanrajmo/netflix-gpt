// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3iOYgJTtWCJVr-wHTj2ShxapoKwPmBQE",
  authDomain: "netflix-gpt-faa79.firebaseapp.com",
  projectId: "netflix-gpt-faa79",
  storageBucket: "netflix-gpt-faa79.appspot.com",
  messagingSenderId: "257641242687",
  appId: "1:257641242687:web:3a3863d34e9dc06729988a",
  measurementId: "G-57ME8VPF4E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);