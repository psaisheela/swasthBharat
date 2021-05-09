import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCBvoEWZCgpuyxkYZBUCvJQZHqCsrYv7G0",
    authDomain: "swasthbharat-75d8c.firebaseapp.com",
    projectId: "swasthbharat-75d8c",
    databaseURL: "https://swasthbharat-75d8c.firebaseio.com",
    storageBucket: "swasthbharat-75d8c.appspot.com",
    messagingSenderId: "705595851092",
    appId: "1:705595851092:web:b206731c8df7d9634608c1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()