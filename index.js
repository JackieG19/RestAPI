const express = require('express');

// postman ver 6.5
// const bodyParser = require('body-parser');

const mongoose = require('mongoose');

// set up express app
const app = express();

// connect to mongo database
mongoose.connect('mongoddb//localhost/ninjago');
mongoose.Promise = global.Promise;


// initialize routes
app.use('/api', require('./routes/api'));

// error handling 
app.use(function(err, req, res, next){
   console.log(err); 
   res.status(422).send({error: err.message});
});

// listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('now listening for request');
});
