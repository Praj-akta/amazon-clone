import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwYmWMsYagccdemPyfvOxaLSPTDtAdlCE",
  authDomain: "clone-6e9aa.firebaseapp.com",
  projectId: "clone-6e9aa",
  storageBucket: "clone-6e9aa.appspot.com",
  messagingSenderId: "865998871568",
  appId: "1:865998871568:web:37a40d97295a6da12ebe95",
  measurementId: "G-Y2KVZHRJBG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
