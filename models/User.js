const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  type_of_user: {
    type: String,
    // enum: ['Organizer', 'Attendee']
  },
  resetPasswordToken:{type:String},
  question1:{
    type:String
  },
  answer1:{
    type:String
  },
  question2:{
    type:String
  },
  answer2:{
    type:String
  },
  activityname: [{
    type:String
  }
  ],  
  likes: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'events'}],
  venuename: [{
    type:String
  }
  ],
  Waitinglistevent: [{
    type:String
  }
  ],
  timeslot:{
    type:String
  }
});

module.exports = User = mongoose.model('user', UserSchema);
