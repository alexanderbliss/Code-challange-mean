var express = require('express');
var app = express();
var port = 5000;
var bodyParser = require('body-parser');
var message = require('./routes/message.route.js');

app.use(bodyParser.json())
app.use(express.static('server/public'))

app.use('/message', message)


//MONGOOSE
var mongoose = require('mongoose');
var databaseUrl = 'mongodb://localhost:27017/messages';

mongoose.connection.on('connected', function () {
    console.log('mongoose GOT GOT');
})
mongoose.connection.on('error', function () {
    console.log('No good Mr Jones');
})
mongoose.connect(databaseUrl);



app.listen(port, function (req, res) {
    console.log('istening on port', port);



})