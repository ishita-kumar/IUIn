const mongoose = require('mongoose');

const WaitSchema = new mongoose.Schema({
  
      activityname: { type :String,
      },
      listuser:[{
          type: String,
      }
      ]

},{ collection: 'waitlist' });

module.exports = Waitlist = mongoose.model('waitlist', WaitSchema);
