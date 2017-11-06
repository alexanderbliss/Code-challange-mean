var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MessageSchema = new Schema({ user: String, comment: String, });

var Message = mongoose.model('Message', MessageSchema, 'messages');


//GET ROUTE
router.get('/comment', function (req, res) {
    Message.find({}, function (err, foundListings) {
        if (err) {
            res.sendStatus(500);
        } else {
            res.send(foundListings)
        }
    })
});

//POST ROUTE

router.post('/comment', function (req, res) {
    console.log(req.body);
    var message = new Message(req.body);
    message.save(function (err, data) {
        if (err) {
            res.sendStatus(500);

        } else {
            res.sendStatus(200);
        }
    });
}); //End POST route

module.exports = router;
