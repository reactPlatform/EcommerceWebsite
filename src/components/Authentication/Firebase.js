// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP8bURBDDDx1FMBh1DOeH33039sCFoHmo",
  authDomain: "react-firebase-46dc6.firebaseapp.com",
  databaseURL: "https://react-firebase-46dc6-default-rtdb.firebaseio.com",
  projectId: "react-firebase-46dc6",
  storageBucket: "react-firebase-46dc6.appspot.com",
  messagingSenderId: "70211296229",
  appId: "1:70211296229:web:f751b9b01fae7f70346d0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);