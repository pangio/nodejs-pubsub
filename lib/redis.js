'use strict';
var redis = require('redis');

/*
 * Redis Cloud Configuration
 */
var client = redis.createClient(REDIS_PORT_NUMBER,
	'REDIS_DATABASE_URL', 
	{no_ready_check: true});

client.auth('REDIS_DATABASE_PASSWORD', function (err) {
    if (err) throw err;
});

/*
 * Connection
 */
client.on('connect', function() {
    console.log('Connected to Redis');
});

client.on('error', function(err){
	console.log("Error with the Redis client");
  	throw err;
});

module.exports = client;