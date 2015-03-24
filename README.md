#PubSub server 
PubSub server example with NodeJS & Socket.io.
For the full example checkout also the [webserver] (https://github.com/pangio/nodejs-webserver) front-end and taste the real-time with NodeJS, Socket.io & Google Charts.

# Stack
*  Nodejs v0.12
*  Express v3.20
*  Socket.io
*  Axon library - see [docs](https://github.com/tj/axon)
*  Redis Database in the Cloud - see [Redis.io](https://redis.io/) & [Redis Labs](https://redislabs.com/)


# Prerequisites
*  Nodejs
*  Redis instance on Cloud - you can create your own for free in [Redis labs](https://redislabs.com/)
*  CURL or any REST Client (like XHR Poster)

# Setup

* clone the repo
```
https://github.com/pangio/nodejs-pubsub.git
```
* Build
```
npm install
```
* Database Config

Setup your cloud database connection by adding  ```PORT``` , ``` URL``` & ```PASSWORD``` in the [redis.js] (./lib/redis.js) .

* Run
```
node app.js
```


# Endpoint & Http Methods

* ``` URL ```   - [localhost:8000/people](http://localhost:8000/people)
* ``` POST ```  - Creates a new person.
* ``` GET ```   - Returns the list of people.

# JSON
```
{"pid" : "1", "name": "John Doe", "gender": "male"}

{"pid" : "2", "name": "Jane Doe", "gender": "female"}
```

* Using Curl
```
curl -X POST http://localhost:8000/people -H "content-type: application/json" -d '[{"pid" : "1", "name": "John Doe", "gender": "male"}]'
```
