const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Message = require('../../Models/Message');

// ROUTE POST api/messages
router.post('/',  (req,res)=>{
    const {fullname, email, subject, message} = req.body;

    if(!fullname || !email || !subject || !message ){ return res.status(400).json({msg: 'Please Enter All Fields'});
}
   
    const newMessage = new Message({
        fullname,
        email,
        subject,
        message
});
   
    newMessage.save().then(message => res.json(message));
});

// GET ROUTE 
router.get('/',  (req,res)=>{
    Message.find()
        .then(message => res.json(message));
});

module.exports = router;