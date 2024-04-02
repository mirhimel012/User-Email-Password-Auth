// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOGBa_jaQKZJvWj5dViZh12slZiaRY8fo",
  authDomain: "user-email-password-auth-485ee.firebaseapp.com",
  projectId: "user-email-password-auth-485ee",
  storageBucket: "user-email-password-auth-485ee.appspot.com",
  messagingSenderId: "713366302667",
  appId: "1:713366302667:web:049bb71b31f4e97b09104e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;