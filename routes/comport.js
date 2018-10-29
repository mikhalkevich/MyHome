var express = require('express');
const shell = require('shelljs');
var cookieParser = require('cookie-parser');
var router = express.Router();
var SerialPort = require('serialport');
var port = new SerialPort('/dev/ttyUSB0', {autoOpen: true});

/* GET home page. */
router.get('/', function (req, res, next) {

    /*
        serialPort.list(function (err, ports) {
            var availablePorts = [];
            ports.forEach(function(port) {


                port.comName = port.comName;
                port.manufacturer = port.manufacturer;
                port.pnpId = port.pnpId;
                availablePorts.push(port);

            });
            var comportname = availablePorts[0].comName;
            console.log(comportname);
            //"/dev/ttyUSB0"
        });
        */

// The open event is always emitted

    port.on('open', function () {
        // open logic
        console.log('event')
    });
    port.open(function (err) {
        if (err) {
            return console.log('Error opening port: ', err.message);
        }
        var buff = [171, 2, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 188, 172];
        port.write(buff, function(err) {
            if (err) {
                return console.log('Error on write: ', err.message);
            }
            console.log(data);
        });
        port.close();
    });
    //shell.exec('../command');
    res.redirect('/');
    //res.render('index', { title: 'Balevs Server' });
});
router.get('/on', function (req, res, next) { 
        var arr = [171, 2, 1, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 178, 172];
    res.cookie('porttest',port.read([]), { maxAge: 900000, httpOnly: true });
        port.write(arr, function(err) {
            if (err) {
                return console.log('Error on write: ', err.message);
            }
        });
    res.redirect('/');
});
module.exports = router;
