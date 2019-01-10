const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

// get a list of ninjas get from the database
router.get('./ninjas', function(req, res, next){
    res.send({type: 'GET'});
});
// add a new ninja to the db
router.post('./ninjas', function(req, res, next){
    //var ninja = new Ninja(req.body);
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
    }).catch(next);
});

// update a ninja to the database
router.put('./ninjas/:id', function(req, res, next){
    res.send({type: 'PUT'});
});

// delete a ninja from the database
router.get('./ninjas/:id', function(req, res, next){
    //console.log(req.params.id);
    Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
        res.send(ninja);
    });
   // res.send({type: 'DELETE'});
});

module.exports = router;