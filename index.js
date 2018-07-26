'use strict';

const {dialogflow} = require('actions-on-google');
const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require("body-parser");

const app = dialogflow({debug: true});

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/echo", function(req, res) {
 app.intent('Default Welcome Intent', (conv) => {
  conv.ask('Welcome to number echo! Say a number.');
});

app.intent('Input Number', (conv, {num}) => {
  // extract the num parameter as a local string variable
  conv.close(`You said ${num}`);
});

});
