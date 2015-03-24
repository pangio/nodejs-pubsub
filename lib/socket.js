'use strict';

var axon = require('axon');
var socket = axon.socket('pub');

/**
 *  Bind the pub socket to localhost:8001 via axon
 */
socket.bind(8001);

/**
 *  On error event
 */
socket.on('error', function(err){
  throw err;
});

/**
 *  Publish the new person to the pub/sub socket
 */
exports.send = function(data){
	console.log("Backend > publish person to the pub/sub socket");
	console.log("Data > " + JSON.stringify(data));
	socket.send(data);
};