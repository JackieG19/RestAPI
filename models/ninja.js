const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create geolocation Schema
const GeoSchema = new Schema({
   type: {
      type: String,
      default: "Point"
   },
   coordinats: {
      type: [Number],
      index: "2dsphere"
   }
});

// create ninja Schema asnd models
const NinjaSchema = new Schema({
   name: {
       type: String,
       required: [true, 'Name field is required']
   },
   
   rank: {
       type: String
   },
   
   available:{
       type: Boolean,
       default: false
   },
   // geolocation
   geometry: GeoSchema
});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;