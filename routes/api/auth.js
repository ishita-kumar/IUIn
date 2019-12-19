const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const nodemailer = require('nodemailer')
const cors = require('cors')
const Venues = require('../../models/Venues');
const { check, validationResult } = require('express-validator/check');
const Wait =require('../../models/Waitlist');
const User = require('../../models/User');
const Events =require('../../models/Events');
router.use(cors())
const crypto = require('crypto');
// @route    GET api/auth
// @desc     Test route
// @access   Public
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);
router.post('/sendss',(req,res) => {
  console.log(req.body.email);
  User.findOne({
     email: req.body.email,
  }).then(user =>{
      if(user.question1 === req.body.question1 &&user.question2 === req.body.question2 &&user.answer1 === req.body.answer1 &&user.answer1 === req.body.answer1 ){
      const token = crypto.randomBytes(20).toString('hex');
      console.log(token);
      user.resetPasswordToken =token;
      user.save().then( console.log('saved'));
     
      const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth:{
              user:'iuinresetpass@gmail.com',
              pass: 'Chandler970213'
          },
      });
      const mailOptions ={
          from: 'iuinresetpass@gmail.com',
          to: `${user.email}`,
          subject: 'reset password',
          text: `link: http://localhost:3000/Resetpass/${token}`,
      };
      console.log('sending');
      transporter.sendMail(mailOptions,function(err,response){
          if(err){
              console.error('there was an error:' +err)
          }else{
              res.json('email has sent');
          }
      });
    }else{res.json('your question or answer is wrong') }
  });
 });
router.put('/updatess',(req)=>{
  console.log(req.body.password);
 User.findOne({
       email: req.body.email
 }).then(user =>{
   bcrypt.hash(req.body.password, 10, (err, hash) =>{
     user.password =hash;
     user.save().then( console.log('updated'));
   })
 })
   
});
router.route('/show').get((req, res) => {
//  console.log(req.body.information);
      const eventlist=[]
 Events.find()
   .then(events => {

     res.json(events)})
   .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/getevent').put((req, res) => {
  //  console.log(req.body.information);
        const eventlist=[]
        console.log(req.body.activitynames)
   Events.find( {name:req.body.activitynames})
     .then(events => {
  
       res.json(events)})
     .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/getvenue').put((req, res) => {
    //  console.log(req.body.information);
          const eventlist=[]
          console.log(req.body.venuenames)
     Venues.find( {name:req.body.venuenames})
       .then(events => {
    
         res.json(events)})
       .catch(err => res.status(400).json('Error: ' + err));
    });
    router.route('/getwaitl').put((req, res) => {
      //  console.log(req.body.information);
            const eventlist=[]
            
       Events.find( {name:req.body.activitynames})
         .then(events => {
      
           res.json(events)})
         .catch(err => res.status(400).json('Error: ' + err));
      });
router.route('/people').get((req, res) => {
  //  console.log(req.body.information);
        const eventlist=[]
   User.find()
     .then(events => {
  
       res.json(events)})
     .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/venues').get((req, res) => {
    //  console.log(req.body.information);
          const eventlist=[]
     Venues.find()
       .then(events => {
    
         res.json(events)})
       .catch(err => res.status(400).json('Error: ' + err));
    });
router.route('/show/:id').get((req, res) => {
 Events.find({_id:req.params.id})
   .then(event => res.json(event))
   .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/rating').post((req, res) => {
  console.log(req.body.name);
  console.log(req.body.Rating);
  Venues.findOne({name:req.body.name})
.then(user=>{
   
  console.log(req.body.Rating);
  user.Rating =req.body.Rating;
  user.UsersWhoRated.push(req.body.NewRater)
  user.RatingRaw = req.body.TotalRating;
  user.save().then( console.log('saved')); 
  
 
})
})
router.route('/regievent/:id').get((req, res) => {
  User.find({_id:req.params.id})
    .then(event => res.json(event))
    .catch(err => res.status(400).json('Error: ' + err));
 });
router.route('/kk/:id').get((req, res) => {
  Events.find({_id:req.params.id})
    .then(event => res.json(event))
    .catch(err => res.status(400).json('Error: ' + err));
 });
 router.route('/getfistone').put((req, res) => {
  Wait.find({activityname:req.body.activityname})
    .then(event => res.json(event))
    .catch(err => res.status(400).json('Error: ' + err));
 });
router.route('/venues/:id').get((req, res) => {
  Venues.find({_id:req.params.id})
    .then(event => res.json(event))
    .catch(err => res.status(400).json('Error: ' + err));
 });
 router.route('/gotoprofile/:id').get((req, res) => {
  User.find({_id:req.params.id})
    .then(event => res.json(event))
    .catch(err => res.status(400).json('Error: ' + err));
 });
 router.route('/confirmations/:id').get((req, res) => {
  Events.find({_id:req.params.id})
    .then(event => res.json(event))
    .catch(err => res.status(400).json('Error: ' + err));
 });
 router.route('/confirmationss/:id').get((req, res) => {
  Venues.find({_id:req.params.id})
    .then(event => res.json(event))
    .catch(err => res.status(400).json('Error: ' + err));
 });
 router.route('/confirmation').post((req, res) => {
  
      Events.findOneAndUpdate({_id: req.body.event_id}, {$addToSet: {attendees: req.body.user_id}}, function(err, done) {
        if (err) console.log(err)
        
      })
      User.findOne({email:req.body.email})
      .then(user=>{
      
        console.log(req.body.activityname);
        
        user.activityname.push(req.body.activityname)
        
        user.save().then( console.log('saved'));
          
     
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth:{
              user:'iuinresetpass@gmail.com',
              pass: 'Chandler970213'
          },
      });
      const mailOptions ={
          from: 'iuinresetpass@gmail.com',
          to: `${user.email}`,
          subject: 'confirmation letter',
          text: ' confirmation',
      };
      console.log('sending');
      transporter.sendMail(mailOptions,function(err,response){
          if(err){
              console.error('there was an error:' +err)
          }else{
              res.status(200).json('email has sent');
          }
      });
      })
    })
    router.route('/getwait').post((req, res) => {

      User.findOne({email:req.body.email})
      .then(user=>{
        user.Waitinglistevent.push(req.body.activityname)        
        user.save().then( console.log('saved'));
      })
    })
    router.route('/postemail').post((req, res) => {
      User.findOne({email:req.body.firstperson})
      .then(user=>{
      
        console.log(req.body.activityname);
        
        user.activityname.push(req.body.activityname)
        
        user.save().then( console.log('saved'));
          
     
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth:{
              user:'iuinresetpass@gmail.com',
              pass: 'Chandler970213'
          },
      });
      const mailOptions ={
          from: 'iuinresetpass@gmail.com',
          to: `${user.email}`,
          subject: 'confirmation letter',
          text: ' confirmation',
      };
      console.log('sending');
      transporter.sendMail(mailOptions,function(err,response){
          if(err){
              console.error('there was an error:' +err)
          }else{
              res.status(200).json('email has sent');
          }
      });
      })
    })
    router.route('/getintowaitlist').post((req, res) => {
      console.log(req.body.activityname);
    Wait.findOne({activityname:req.body.activityname})
    .then(user=>{
       if(user){
      console.log(req.body.email);
      user.listuser.push(req.body.email)
      user.save().then( console.log('saved')); 
       }else{
         const activityname =req.body.activityname;
         const listuser =req.body.email;
           user = new Wait({
             activityname,
             listuser
           });
           user.save().then(console.log('save'));
       }
       const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user:'iuinresetpass@gmail.com',
            pass: 'Chandler970213'
        },
    });
       const mailOptions ={
        from: 'iuinresetpass@gmail.com',
        to: `${req.body.email}`,
        subject: 'confirmation letter',
        text: 'Hey, you are in the waiting list !!!',
    };
    console.log('sending');
    transporter.sendMail(mailOptions,function(err,response){
        if(err){
            console.error('there was an error:' +err)
        }else{
            res.status(200).json('email has sent');
        }
    });
    })
  })
    router.route('/confirmatio').post((req, res) => {
  
     
      User.findOne({email:req.body.email})
      .then(user=>{
         
        console.log(req.body.venuename);
        user.venuename.push(req.body.venuename);
    
        user.save().then( console.log('saved'));
          
     
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth:{
              user:'iuinresetpass@gmail.com',
              pass: 'Chandler970213'
          },
      });
      const mailOptions ={
          from: 'iuinresetpass@gmail.com',
          to: `${user.email}`,
          subject: 'confirmation letter',
          text: ' confirmation',
      };
      console.log('sending');
      transporter.sendMail(mailOptions,function(err,response){
          if(err){
              console.error('there was an error:' +err)
          }else{
              res.status(200).json('email has sent');
          }
      });
      })
    })
    router.route('/capacity').post((req, res) => {
        console.log(req.body.name);
        console.log(req.body.capacity);
      Events.findOne({name:req.body.name})
      .then(user=>{
         
        console.log(req.body.capacity);
        user.Capacity =req.body.capacity;
        user.save().then( console.log('saved')); 
        
       
    })
  })
  router.route('/cancel').post((req, res) => {
   
  User.findOne({email:req.body.email})
  .then(user=>{
     user.activityname.pull(req.body.activityname)
    
    user.save().then( console.log('saved')); 
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth:{
          user:'iuinresetpass@gmail.com',
          pass: 'Chandler970213'
      },
  });
  const mailOptions ={
      from: 'iuinresetpass@gmail.com',
      to: `${user.email}`,
      subject: 'cancel letter',
      text: 'cancel confirmed',
  };
  console.log('sending');
  transporter.sendMail(mailOptions,function(err,response){
      if(err){
          console.error('there was an error:' +err)
      }else{
          res.status(200).json('email has sent');
      }
  });
})
})
  
   
router.put('/showss',(req, res) => {
 console.log(req.body.searchme);
 const noMatch=null;
 if(req.body.searchme){
   const regex = new RegExp(escapeRegex(req.body.searchme),'gi');
   Events.find({name :regex },function(err,allevents){
     if(err){
       console.log(err);
     }else{
       if(allevents.length<1){
         noMatch ="ssssssssss";
       }
       res.json(allevents);
     }
   })
   
   
 } else{
   Events.find()
   .then(events => res.json(events))
   .catch(err => res.status(400).json('Error: ' + err));
 }
});
router.put('/peoplesearch',(req, res) => {
  console.log(req.body.searchme);
  const noMatch=null;
  if(req.body.searchme){
    const regex = new RegExp(escapeRegex(req.body.searchme),'gi');
    User.find({name :regex },function(err,allevents){
      if(err){
        console.log(err);
      }else{
        if(allevents.length<1){
          noMatch ="ssssssssss";
        }
        res.json(allevents);
      }
    })
    
    
  } else{
    User.find()
    .then(events => res.json(events))
    .catch(err => res.status(400).json('Error: ' + err));
  }
 });
 router.put('/venuessearch',(req, res) => {
  console.log(req.body.searchme);
  const noMatch=null;
  if(req.body.searchme){
    const regex = new RegExp(escapeRegex(req.body.searchme),'gi');
    Venues.find({name :regex },function(err,allevents){
      if(err){
        console.log(err);
      }else{
        if(allevents.length<1){
          noMatch ="ssssssssss";
        }
        res.json(allevents);
      }
    })
    
    
  } else{
    Venues.find()
    .then(events => res.json(events))
    .catch(err => res.status(400).json('Error: ' + err));
  }
 });
 router.put('/removetimeslot',(req, res) => {
   Venues.findOne({name:req.body.name}).then(event =>{
     console.log(req.body.name);
     console.log(req.body.Timeslot1);
     if(event.TimeslotOne === req.body.Timeslot1){
       event.TimeslotOne = event.TimeslotOne+' ( this time has been occpuied)';
       event.save().then( console.log('saved'));
     }
     else if(event.TimeslotTwo === req.body.Timeslot1){
      event.TimeslotTwo = event.TimeslotTwo+' ( this time has been occpuied)';
      event.save().then( console.log('saved'));
    }
    else if(event.TimeslotThree === req.body.Timeslot1){
      event.TimeslotThree = event.TimeslotThree+' ( this time has been occpuied)';
      event.save().then( console.log('saved'));
    }

   })
 });
router.put('/shows',(req, res) => {
 console.log(req.body.type);
 const noMatch=null;
 if(req.body.type){
   Events.find({type:req.body.type},function(err,allevents){
     if(err){
       console.log(err);
     }else{
       if(allevents.length<1){
         noMatch ="ssssssssss";
       }
       res.json(allevents);
     }
   })
 } else{
   Events.find()
   .then(events => res.json(events))
   .catch(err => res.status(400).json('Error: ' + err));
 }
});
router.put('/locations',(req, res) => {
 console.log(req.body.location);
 const noMatch=null;
 if(req.body.location){
   Events.find({location:req.body.location},function(err,allevents){
     if(err){
       console.log(err);
     }else{
       if(allevents.length<1){
         noMatch ="ssssssssss";
       }
       res.json(allevents);
     }
   })
 } else{
   Events.find()
   .then(events => res.json(events))
   .catch(err => res.status(400).json('Error: ' + err));
 }
});
router.put('/locationbloomington',(req, res) => {
  console.log(req.body.location);
  const noMatch=null;
  if(req.body.location){
    Events.find({location:req.body.location},function(err,allevents){
      if(err){
        console.log(err);
      }else{
        if(allevents.length<1){
          noMatch ="ssssssssss";
        }
        res.json(allevents);
      }
    })
  } else{
    Events.find()
    .then(events => res.json(events))
    .catch(err => res.status(400).json('Error: ' + err));
  }
 });
router.put('/venuestype',(req, res) => {
  console.log(req.body.type);
  const noMatch=null;
  if(req.body.type){
    Venues.find({type:req.body.type},function(err,allevents){
      if(err){
        console.log(err);
      }else{
        if(allevents.length<1){
          noMatch ="ssssssssss";
        }
        res.json(allevents);
      }
    })
  } else{
    Venues.find()
    .then(events => res.json(events))
    .catch(err => res.status(400).json('Error: ' + err));
  }
 });
 router.put('/venueslocation',(req, res) => {
  console.log(req.body.location);
  const noMatch=null;
  if(req.body.location){
    Venues.find({location:req.body.location},function(err,allevents){
      if(err){
        console.log(err);
      }else{
        if(allevents.length<1){
          noMatch ="ssssssssss";
        }
        res.json(allevents);
      }
    })
  } else{
    Venues.find()
    .then(events => res.json(events))
    .catch(err => res.status(400).json('Error: ' + err));
  }
 });
router.put('/ages',(req, res) => {
 console.log(req.body.age);
 const noMatch=null;
 if(req.body.age){
   Events.find({age:req.body.age},function(err,allevents){
     if(err){
       console.log(err);
     }else{
       if(allevents.length<1){
         noMatch ="ssssssssss";
       }
       res.json(allevents);
     }
   })
 } else{
   Events.find()
   .then(events => res.json(events))
   .catch(err => res.status(400).json('Error: ' + err));
 }
});

function escapeRegex(text) {
 return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

module.exports = router;
