"use strict";

const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
const express = require('express');
const bodyParser = require("body-parser");
const ApiAiApp = require('actions-on-google').ApiAiApp;

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);



restService.use(bodyParser.json());

restService.post("/echo", function(req, res) {
    const app = new ApiAiApp({request: req, response: res});
    const WELCOME_INTENT = 'input.welcome';
	const actionMap = new Map();
	actionMap.set(WELCOME_INTENT, welcomeIntent);
	app.handleRequest(actionMap);

});

function welcomeIntent(app){
	app.ask(app.buildRichResponse()
	// Create a basic card and add it to the rich response
	.addSimpleResponse('Math and prime numbers it is!')
		.addBasicCard(app.buildBasicCard(`42 is an even composite number. It
		 is composed of three distinct prime numbers multiplied together. It
		 has a total of eight divisors. 42 is an abundant number, because the
		 sum of its proper divisors 54 is greater than itself. To count from
		 1 to 42 would take you about twenty-one…`)
		 .setTitle('Math & prime numbers')
		 .addButton('Read more')
		 .setImage('https://example.google.com/42.png', 'Image alternate text')
		)
	);
}


restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});