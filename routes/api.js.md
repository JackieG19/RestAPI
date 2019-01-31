```
const express = require('express');
// require express so we can use it

const router = express.Router();
// this is our router object which we can store or mount the router handler

const Ninja = require('../models/ninja.js');

// **get a list of ninjas from the database
router.get('/ninjas', function(req, res, next){
// a GET request for the router(/is the route which is refer to the get request, 
// callback function(pass in a request and response object)) 

    Ninja.geoNear(
        {type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
        {maxDistance: 100000, spherical: true}
    ).then(function(ninjas){
        res.send(ninjas);
        // response send
    }).catch(next);
});

// **add a new ninja to the db
router.post('/ninjas', function(req, res, next){
// a POST request for the router(/is the route which is refer to the get request, 
// callback function(pass in a request and response object)) 

    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
    }).catch(next);
});


// **update a ninja in the db
router.put('/ninjas/:id', function(req, res, next){
// a PUT request for the router(/is the route which is refer to the get request/:and the parameter of a specific ninja
// callback function(pass in a request and response object)) 

    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Ninja.findOne({_id: req.params.id}).then(function(ninja){
            res.send(ninja);
        });
    }).catch(next);
});

// **delete a ninja from the db
router.delete('/ninjas/:id', function(req, res, next){
// a DELET request for the router(/is the route which is refer to the get request/:and the parameter of a specific ninja 
// callback function(pass in a request and response object)) 

    Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
        res.send(ninja);
    }).catch(next);
});

// mounted each routes to the router object over. 

module.exports = router;
// this allows the routes to be use in the index file
```
