
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyCuidFpM9M1nbqrTz91hPnpalR8NOaICdE",
  authDomain: "bookhub-21746.firebaseapp.com",
  projectId: "bookhub-21746",
  storageBucket: "bookhub-21746.appspot.com",
  messagingSenderId: "223826991687",
  appId: "1:223826991687:web:1abcb885d4e346b902af62"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
