const mongoose = require('mongoose');


const ActivitySchema =  new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  latLng:
    {
      lat: {type: Number, required: true},
      lng: {type: Number, required: true}
    }
}, {
  collection: 'activities',
  safe: true
});

const activity = mongoose.model('activity', ActivitySchema);




module.exports = activity;
