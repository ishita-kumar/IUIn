const express = require('express');
const request = require('request');
const config = require('config');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator/check');
const nodemailer = require('nodemailer')

const Profile = require('../../models/Profile');
const User = require('../../models/User');
const Events = require('../../models/Events');

router.post('/', function(req, res) {    
    new Events(req.body).save(function(err, event) {
        if (err) console.log(err)
        res.json(event)
    })
})

// set status of event to cancelled
router.patch('/:id', function(req, res) {    
    Events.findOneAndUpdate({_id: req.params.id}, {$set: { status: 'Cancelled'}}, function(err, event) {
        // console.log(event)
        event.attendees.forEach(attendee => {
            User.findOne({_id: attendee._id}, function(err, user) {
                console.log('DD: ', user)
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
                    subject: 'Sorry!',
                    text: `Your event ${event.name} has been cancelled.`,
                };
                console.log('sending');
                transporter.sendMail(mailOptions,function(err,response){
                    if(err){
                        console.error('there was an error:' +err)
                    }else{
                        console.log('sent')
                    }
                });
            })
        })
        if (err) console.log(err)
        res.json(event)
    })
})

// get all the events of a particular user
router.get('/:id', function(req, res) {    
    Events.find({organizer: req.params.id})
    .populate({
        path: 'attendees',
        populate: { path: 'attendees' }
    })
    .exec(function(err, events) {
        if (err) console.log(err)
        res.json(events)
    })
})
module.exports = router