import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDoaPmXnBG9mdDGUIUKsKgHfeV-VIpkZrs",
  authDomain: "cp-slack-clone-12c82.firebaseapp.com",
  projectId: "cp-slack-clone-12c82",
  storageBucket: "cp-slack-clone-12c82.appspot.com",
  messagingSenderId: "524124272686",
  appId: "1:524124272686:web:e0e748cb0483864bd3c7bf"
};

const FirebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
