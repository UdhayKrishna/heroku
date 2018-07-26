'use strict'

const express = require('express')
const bodyParser = require('body-parser')

// Create a new instance of express
const app = express()

// Route that receives a POST request to /sms
app.post('/', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ 'fulfillmentText': 'hello baby'}));
})
