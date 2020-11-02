import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDbsrky-3EiVAmwMwS5sMOhIC98EiO6kng",
  authDomain: "postgram-56a5b.firebaseapp.com",
  databaseURL: "https://postgram-56a5b.firebaseio.com",
  projectId: "postgram-56a5b",
  storageBucket: "postgram-56a5b.appspot.com",
  messagingSenderId: "122756328312",
  appId: "1:122756328312:web:130e7d1adea00a60bf768d",
  measurementId: "G-YH7BHTVDM2",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
