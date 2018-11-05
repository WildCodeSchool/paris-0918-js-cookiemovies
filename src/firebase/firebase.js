import firebase from "firebase/app"
require('firebase/auth')



const config = {
    apiKey: "AIzaSyC67SuNCu0XVL4Q1TJfccHL7sS6BNzt5QY",
    authDomain: "accountusers-3d979.firebaseapp.com",
    databaseURL: "https://accountusers-3d979.firebaseio.com",
    projectId: "accountusers-3d979",
    storageBucket: "accountusers-3d979.appspot.com",
    messagingSenderId: "110709288031",
  };
  

  if(!firebase.apps.length) {
      firebase.initializeApp(config);
  }

  const auth = firebase.auth();

  export {
      auth,
 };

