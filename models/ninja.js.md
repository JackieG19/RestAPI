```
const mongoose = require('mongoose');
// require mongoose to use it in this file

const Schema = mongoose.Schema;
// schema is like a container of objects and the data is hold are stored.

// **create geolocation Schema
const GeoSchema = new Schema({
    type: {
        type: String,
        default: 'Point'
    },
    coordinates: {
        type: [Number],
        index: '2dsphere'
    }
});

// **create ninja Schema & model
const NinjaSchema = new Schema({
// how the data is going to be structured

// defining the structure of how the object is going to look for the ninja
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    },
    geometry: GeoSchema 
    // the geolocation of ninja, when you put in a latitude or longitude, you 
    // send a request its going to return ninjas only within certain radius
});

// creating a ninja model which is going to represent the colllection in the database
const Ninja = mongoose.model('ninja', NinjaSchema);
// Ninja is the name of the model = require mongoose which is above
// (and pass through a name of the collection in the database)
// the mongoose is gonna create the collection called ninjas
// the ninja model will represent the ninja in the collection
// we want the objects within this collection to be structure based on this ninja Schema

module.exports = Ninja;
// Export this model so we can use it in other files specificallly when we come to do
// with routes in more detail when it comes to post and create new ninja, going to need
// access to this model.
```
