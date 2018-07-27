"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/echo", function(req, res) {
let response = "This is a sample response from your webhook!";//Default response from the webhook to show it’s working
let responseObj={
     "fulfillmentText":response
    ,"fulfillmentMessages":[
        {
            "text": {
                "text": [
                    "Hello I m Responding to intent"
                ]
            }
        }
    ]
    ,"source":""
}
return res.json(responseObj);});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});