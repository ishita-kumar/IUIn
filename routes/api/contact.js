const express = require('express');
const router = express.Router();
const config = require('config');
const { check, validationResult } = require('express-validator/check');

const Contact = require('../../models/Contact');

// @route    POST api/contact
// @desc     contact the team
// @access   Public
router.post(
  '/',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'type_of_user',
      'Please enter Attendee or Organizer'
    )
  ],
  async (req, res) => {
    console.log('Entered the contact us page')
    console.log(JSON.stringify(req.body))
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, type_of_user,message } = req.body;

    try {
      
        contact = new Contact({
        name,
        email,
        type_of_user,
       message
      });


      await contact.save();

     // res.redirect('https://google.com');
     res.status(200).send('Success');
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
