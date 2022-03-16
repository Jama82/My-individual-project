import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBKRA4YwvrwGDnFraR7JO1dYbkXCWjEgGo",
    authDomain: "mypro-8fcb3.firebaseapp.com",
    projectId: "mypro-8fcb3",
    storageBucket: "mypro-8fcb3.appspot.com",
    messagingSenderId: "482361860676",
    appId: "1:482361860676:web:835ed630095b3f66e09211"
  };
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;  