const mongoose = require('mongoose');

const User = require('./User')

const EventsSchema = new mongoose.Schema({
  name:{
    type: String,
    
  },
  organizer: {
    type: mongoose.SchemaTypes.ObjectId, ref: 'user'
  },
  type: {
    type: String,

  },
  information: {
    type: String,
  },
  longitude:{
    type:Number,
    default: -86.5221
  },
  latitude:{
    type:Number,
    default: 39.1727
  },
  attendees:[{type: mongoose.Schema.Types.ObjectId, ref: 'user'}],
  pay:{
    type:String,
  },
  address:{
    type:String,
  },
  Details:{
    type:String,
  },
  Capacity:{
    type:Number
  },
  Age: {
    type: String
  },
  status: {
    type: String,
    default: 'Confirmed'
  }

},{ collection: 'events' }
);


module.exports = Events = mongoose.model('events', EventsSchema);