const mongoose = require("mongoose");

const ContactUs = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  type_of_user: {
    type: String
    //enum: ['Organizer', 'Attendee']
  },
  message: {
    type: String,
	required: true
  }
});

module.exports = Contact = mongoose.model("contact", ContactUs);
