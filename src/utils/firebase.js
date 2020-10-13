import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAuzgnwssR7eim9P6ywZ6Q4BsBzr964EYA",
    authDomain: "easy-shop-2cab6.firebaseapp.com",
    databaseURL: "https://easy-shop-2cab6.firebaseio.com",
    projectId: "easy-shop-2cab6",
    storageBucket: "easy-shop-2cab6.appspot.com",
    messagingSenderId: "765315892371",
    appId: "1:765315892371:web:174b33c1a2b972da02f966",
    measurementId: "G-5T5LEWCVZQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default  firebase;