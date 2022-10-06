import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCQ05U80AgYutgV9lhEIyIs99mhB5qzpUY",
  authDomain: "thedojosite-33380.firebaseapp.com",
  projectId: "thedojosite-33380",
  storageBucket: "thedojosite-33380.appspot.com",
  messagingSenderId: "1004306396882",
  appId: "1:1004306396882:web:87d1bcb30f2d98626bdf0b",
};

// init app
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
