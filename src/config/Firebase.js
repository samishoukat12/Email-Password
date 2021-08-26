// connect with authentication project
import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyAnM4HxGygkrAwp_1r2EI2V7AIeBzMZ3Cc",
    authDomain: "authentication-75d6b.firebaseapp.com",
    projectId: "authentication-75d6b",
    storageBucket: "authentication-75d6b.appspot.com",
    messagingSenderId: "673968523508",
    appId: "1:673968523508:web:fd31c9b6acae12a1d5f6a1",
    measurementId: "G-5TPJLW34GH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const db=firebase.firestore();
  export const auth=firebase.auth();
