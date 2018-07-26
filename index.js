'use strict';

const {dialogflow} = require('actions-on-google');
const functions = require('firebase-functions');

const app = dialogflow({debug: true});

app.intent('Default Welcome Intent', (conv) => {
  conv.ask('Welcome to number echo! Say a number.');
});

app.intent('Input Number', (conv, {num}) => {
  // extract the num parameter as a local string variable
  conv.close(`You said ${num}`);
});

exports.yourAction = functions.https.onRequest(app);