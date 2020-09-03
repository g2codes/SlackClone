import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBs3xDtb6KKSHs8zkKY0OAANMxKaw-WWVs",
  authDomain: "slack-clone-c2ff6.firebaseapp.com",
  databaseURL: "https://slack-clone-c2ff6.firebaseio.com",
  projectId: "slack-clone-c2ff6",
  storageBucket: "slack-clone-c2ff6.appspot.com",
  messagingSenderId: "842849254706",
  appId: "1:842849254706:web:4a5e525125c2bdffffab2b",
  measurementId: "G-8SVJEFWQR5",
};

const FirebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
