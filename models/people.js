'use strict';

var redis = require('../lib/redis');
var socket = require('../lib/socket');

/*
 * Save People into the db
 */
exports.save = function(people, callback) {

	console.log("Model > people" + JSON.stringify(people));

	if (!people.length) return callback(null, null);

	var onePerson = people.pop();
	console.log("One Person" + JSON.stringify(onePerson));

	redis.lpush('people', JSON.stringify(onePerson), function(err){
		if (err) return callback (err, null) ;
		// saves one person at the time, recursively
		exports.save(people, callback);
	});
};

/*
 * Send People to the pub/sub soquet
 */
exports.send = function(people) {
  people.forEach(socket.send);
};

/**
 *  Get people from the db
 */
exports.get = function(callback) {
  redis.lrange('people', 0, -1, function(err, data){
    if (err) return callback(err, null);
    callback(null, data.map(JSON.parse));
  });
};