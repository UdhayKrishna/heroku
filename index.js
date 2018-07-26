"use strict";

const express = require('express')();
const bodyParser = require("body-parser");
const router = require('express').Router();
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
const ApiAiApp = require('actions-on-google').ApiAiApp;

//const restService = express();

express.use(bodyParser.json({type: 'application/json'}));

router.post('/card', (req, res) => {
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

express.use('/example', router);

express.listen('8081', function () {
  console.log('Example app is running')
})


/*
restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);



restService.use(bodyParser.json());

restService.post("/echo", function(req, res) {
  var speech =
    req.body.result &&
    req.body.result.parameters &&
    req.body.result.parameters.echoText
      ? req.body.result.parameters.echoText
      : "Seems like some problem. Speak again.";
  return res.json({
    fulfillmentText: speech,
    fulfillmentMessages: [
    {
      "card": {
        "title": "card title",
        "subtitle": "card text",
        "imageUri": "https://assistant.google.com/static/images/molecule/Molecule-Formation-stop.png",
        "buttons": [
          {
            "text": "button text",
            "postback": "https://assistant.google.com/"
          }
        ]
      }
    }
  ],
    source: "webhook-echo-sample"
  });
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");



});

*/