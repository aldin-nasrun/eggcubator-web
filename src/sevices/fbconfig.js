import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCQYFYFJFMVXNdy02hL5h03JvZQ8o4DRL4",
    authDomain: "eggcubator-d446f.firebaseapp.com",
    databaseURL: "https://eggcubator-d446f-default-rtdb.firebaseio.com",
    projectId: "eggcubator-d446f",
    storageBucket: "eggcubator-d446f.appspot.com",
   
  };

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();