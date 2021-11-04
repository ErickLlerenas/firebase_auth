import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import Constants from 'expo-constants';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBkLOerIhuzaaDQSTG01DzgncHXgPgMrKs",
  authDomain: "tarea-68c84.firebaseapp.com",
  projectId: "tarea-68c84",
  storageBucket: "tarea-68c84.appspot.com",
  messagingSenderId: "598345838632",
  appId: "1:598345838632:web:94174fac7860284fd6c51d"
};

console.log(Constants.manifest);

let Firebase;

if (firebase.apps.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
}

export default Firebase;