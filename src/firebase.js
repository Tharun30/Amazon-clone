import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAw8h2SMiW4CDoRnFO5AczXU5GokvbQ0gw",
  authDomain: "clone-3203c.firebaseapp.com",
  databaseURL: "https://clone-3203c.firebaseio.com",
  projectId: "clone-3203c",
  storageBucket: "clone-3203c.appspot.com",
  messagingSenderId: "791072142565",
  appId: "1:791072142565:web:f3dceae9e03c8bc8b0900c",
  measurementId: "G-EJXXT1Q27D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };