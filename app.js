const express = require("express");
var session = require('express-session');
const firebase = require("firebase");

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


var ref = firebase.database().ref().child("users");

ref.set({
	111000:{
		user_name: "Ugonna Ofoegbu",
		password: "kiss2nite"
	}
})
console.log(ref);


