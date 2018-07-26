'use strict';

const express = require('express')();
const router = require('express').Router();
const bodyParser = require('body-parser');
const ApiAiApp = require('actions-on-google').ApiAiApp;

express.use(bodyParser.json({type: 'application/json'}));

router.post('/card', (req, res) => {
	const app = new ApiAiApp({request: req, response: res});
	const WELCOME_INTENT = 'input.welcome';

	const actionMap = new Map();
	actionMap.set(WELCOME_INTENT, welcomeIntent);
	app.handleRequest(actionMap);
	
});

function welcomeIntent(app){
    app.ask(new BasicCard({
  text: `This is a basic card.  Text in a basic card can include "quotes" and
  most other unicode characters including emoji 📱.  Basic cards also support
  some markdown formatting like *emphasis* or _italics_, **strong** or
  __bold__, and ***bold itallic*** or ___strong emphasis___ as well as other
  things like line  \nbreaks`, // Note the two spaces before '\n' required for
                               // a line break to be rendered in the card.
  subtitle: 'This is a subtitle',
  title: 'Title: this is a title',
  buttons: new Button({
    title: 'This is a button',
    url: 'https://assistant.google.com/',
  }),
  image: new Image({
    url: 'https://www.apkmirror.com/wp-content/uploads/2016/07/577db70aecc56-384x384.png',
    alt: 'Image alternate text',
  }),
}));
}

express.use('/example', router);

express.listen('8081', function () {
  console.log('Example app is running')
})