```
const express = require('express');
// require express so we can use it

const bodyParser = require('body-parser');
// body-parser analyze into parts of your request and converts it into a format 
// from which you can easily extract relevant information that you may need.

// Using Node.js `require()`
const mongoose = require('mongoose');

var myHost = process.env.IP;

// **set up express app
const app = express();
// so this is going to do a lot in the background, 
// to create and setup the express application
// this hands us HTTP methods that we can use on it to listen for a type of request


// **connect to mongo database
mongoose.connect('mongodb://' + myHost + '/ninjago');
// connect method is used and passes a connection 
// string so we can go out and find the database
// ('protocol':// + connecting to localhost + '/database')

//*Side Note* 
// Although in the beginning the database doesn't exist yet. 
// When we connect from this application, mongoose is going out 
// see that it doesn't exist and its going to create it for us.

mongoose.Promise = global.Promise;
// setting Promise to global because mongoose version of the promise is deprecated


// **set up static files
app.use(express.static('public'));


app.use(bodyParser.json());
// body parser is going to look at the body of the request, 
// then going to take it, pass that JSON data 
// and attach it to the request object


// **initialize routes
app.use('/api', require('./routes/api'));
// use the routes we have in the api file, require this module inside the apoi route


// **error handling 
app.use(function(err, req, res, next){
  console.log(err); 
  res.status(422).send({error: err.message});
});



// **listen for requests
app.listen(process.env.PORT, process.env.IP, function(){
    console.log('now listening for request');
});
// using a method called listen to a (specifty a port number,
// if your deploying this application to a hosting service there might be an envirnment 
// variable which provides a port to listen to = process.env.PORT,
// then a callback function wgich fires once it's listening to the port number)

```
