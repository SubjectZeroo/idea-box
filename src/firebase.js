import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: "ideadboxlive.firebaseapp.com",
  projectId: "ideadboxlive",
  storageBucket: "ideadboxlive.appspot.com",
  messagingSenderId: "388166670609",
  appId: "1:388166670609:web:4de284b64f6a8e53d5d4b0"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export{ auth, firebase, db }