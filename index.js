const express = require('express');

// postman ver 6.5
// const bodyParser = require('body-parser');

const mongoose = require('mongoose');

// set up express app
const app = express();

<<<<<<< HEAD
// postman ver 6.5
//app.use(bodyParser.json());
=======
// connect to mongo database
mongoose.connect('mongoddb//localhost/ninjago');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
>>>>>>> SaveToMongoDB

// initialize routes
app.use('/api', require('./routes/api'));

// listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('now listening for request');
});
