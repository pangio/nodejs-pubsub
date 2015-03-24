'use strict';

/*
 * People middleware
 */
var model = require('../models/people');
var _ = require('underscore');

/*
 * Sending People to the model to be saved
 */
exports.save = function(req, res, next) {

	console.log("Controller > people " + JSON.stringify(req.body));
	var people = _.clone(req.body);
    model.save(people, function(err, data){
      if (err) return res.send(503, err);
      next();
    })
};

/*
 *  Send People to the pub/sub soquet
 */
exports.send = function(req, res, next) {
	var people = _.clone(req.body);
  	model.send(people);
  	res.send(200, 'success');
};


/**
 *  Find people
 */
exports.get = function(req, res, next) {
  model.get(function(err, data){
    res.json(err ? 503 : 200, {
      error: err ? true : null,
      errorMessage: err ? err : null,
      data: data
    });
  });
};