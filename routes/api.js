const express = require('express');
const router = express.Router();

// get a list of ninjas get from the database
router.get('./ninjas', function(req, res){
    res.send({type: 'GET'});
});
// add a new ninja to the db
router.post('./ninjas', function(req, res){
    console.log(req.body);
    res.send({type: 'POST'});
});
// update a ninja to the database
router.put('./ninjas/:id', function(req, res){
    res.send({
        type: 'PUT',
        name: req.body.name,
        rank: req.body.rank
    });
});
// delete a ninja from the database
router.get('./ninjas/:id', function(req, res){
    res.send({type: 'DELETE'});
});

module.exports = router;