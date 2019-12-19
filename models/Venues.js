const mongoose = require('mongoose');

const VenuesSchema = new mongoose.Schema({
  name:{
    type: String,
    
  },
  type: {
    type: String,

  },
  information: {
    type: String,
  },
  longitude:{
    type:Number
  },
  latitude:{
    type:Number
  },
  TimeslotOne:{
    type: String,
  },
  TimeslotTwo:{
    type: String,
  },
  TimeslotThree:{
    type: String,
  },
  address:{
    type:String,
  },
  Rating:{
    type: Number,
  },
  UsersWhoRated:{
    type: [String]
  },
  RatingRaw:{
    type: Number,
  }

},{ collection: 'venues' }
);


module.exports = Venues = mongoose.model('venues', VenuesSchema);