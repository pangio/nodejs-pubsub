'use strict';

var port = process.env.PORT || 8000;
var express = require('express');
var people = require('./controllers/people');
var app = express();

app.use(express.json());

/**
 *  Allows third party clients to connect to the socket server
 */
app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Headers", "Content-Type");
        res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
        next();
    });

app.listen(port,  function(){
	console.log("Server running in port %d", port);
});

/**
 *  Parse json data from incoming request
 */
app.post('/people', people.save, people.send);

app.get('/people', people.get);















// 'use strict';

// var port = process.env.PORT || 8000;
// var express = require('express');
// var people = require('./controllers/people');
// var app = express();

// app.use(express.json());

// /**
//  *  Allows third party clients to connect to the socket server
//  */
// // app.use(function(request, response, next) {
//   // response.setHeader('Access-Control-Allow-Origin', '*');
//   // response.setHeader('Access-Control-Allow-Origin', '*');
//   // next();
// // });

// app.listen(port,  function(){
// 	console.log("Server running in port %d", port);
// });

// /**
//  *  Parse json data from incoming reuqests
//  */
// app.post('/people', people.save, people.send);
// //function(req, res){	res.send('done el request! \n ' + JSON.stringify(req.body)); }

// app.get('/people', people.get);