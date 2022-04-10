import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const credentials = {
  apiKey: "AIzaSyATBDlz2EGZHR8vHb0iZN4ifYlAkYYkp4A",
  authDomain: "programming-ca.firebaseapp.com",
  projectId: "programming-ca",
  storageBucket: "programming-ca.appspot.com",
  messagingSenderId: "463255916898",
  appId: "1:463255916898:web:ca130e37749e4eaa76dc3b"
};

const app = initializeApp(credentials);
export const auth = getAuth(app);