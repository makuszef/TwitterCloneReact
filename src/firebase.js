import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyApdUXHEU2mzuc89BIs3b5ZdH2qJ7tiwoc",
  authDomain: "twitter-clone-f03da.firebaseapp.com",
  databaseURL: "https://twitter-clone-f03da.firebaseio.com",
  projectId: "twitter-clone-f03da",
  storageBucket: "twitter-clone-f03da.appspot.com",
  messagingSenderId: "47207271506",
  appId: "1:47207271506:web:e7a9d766fc214ddbc1638b",
  measurementId: "G-J114N7C6G6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
