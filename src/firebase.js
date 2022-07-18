// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMSyP2o9D9MiVCBbSTXo-hMPuzrjl0ryY",
  authDomain: "chitter-bf2db.firebaseapp.com",
  projectId: "chitter-bf2db",
  storageBucket: "chitter-bf2db.appspot.com",
  messagingSenderId: "1079280170755",
  appId: "1:1079280170755:web:343c281b97f1f8825adb36",
  measurementId: "G-QXKMRCNC2M"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


export default db;
