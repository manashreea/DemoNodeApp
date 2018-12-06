//const fs = require('fs');
//Assign the event , example basic
// let rs = fs.createReadStream('./demo.txt');
// rs.on('open',function(){
//     console.log('File is open')
// });

const events = require('events');

var evenEmitter = new events.EventEmitter();

//create an event handler
var myEventHandler = function(){
    console.log('We are ready to jump now');
}

//Assign the event hanlder to event
evenEmitter.on('jump',myEventHandler);

//Fire 'jump' event
evenEmitter.emit('jump');
