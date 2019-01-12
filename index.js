const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var myHost = process.env.IP;

// set up express app
const app = express();

// connect to mongo database
mongoose.connect('mongodb://' + myHost + '/ninjago');
mongoose.Promise = global.Promise;

//app.use(express.static('public'));

app.use(bodyParser.json());

// initialize routes
app.use('/api', require('./routes/api.js'));

// error handling 
app.use(function(err, req, res, next){
  console.log(err); 
  res.status(422).send({error: err.message});
});

// listen for requests
app.listen(process.env.PORT, process.env.IP, function(){
    console.log('now listening for request');
});
