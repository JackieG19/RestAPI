const app = require('express');

app.get('/', function(req, res){
   console.log('GET request');
   res.end();
});

// listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('now listening for request');
})