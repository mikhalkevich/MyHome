var express = require('express');
const shell = require('shelljs');
var router = express.Router();
var SerialPort = require('serialport');
var port = new SerialPort('/dev/ttyUSB0', {autoOpen: false});
/* GET home page. */
router.get('/', function(req, res, next) {
    port.open(function (err) {
        var arr = [];
        console.log('Datad:', port.read(arr));
    });
  res.render('index', { title: 'Лампа' });
});

module.exports = router;
