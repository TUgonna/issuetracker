const express = require("express");

const app = express();
const config = {
    apiKey: "AIzaSyDuN91VA8zbUEWquDJamzDHo2BT5l3yxPU",
    authDomain: "issuetracker-eda61.firebaseapp.com",
    databaseURL: "https://issuetracker-eda61.firebaseio.com",
    storageBucket: "issuetracker-eda61.appspot.com",
    messagingSenderId: "351839136232"
  };

firebase.initializeApp(config);

app.use(express.static(__dirname + "index.html"));



const preObject = document.getElementById('object');

const dbRefObject = firebase.database().ref().child('object');

dbRefObject.on('value', snap=>console.log(snap.value()));
