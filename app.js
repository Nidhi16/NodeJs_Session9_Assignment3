var http = require('http');
// Load event module
var events = require('events');

// Create an event emitter object
var eventEmitter = new events.EventEmitter();

var server = http.createServer(function(request, response) {
    // Fire the connection event
    eventEmitter.emit('connection', response);
});

// Bind the myevent event with the anonymous function
eventEmitter.on('myevent', function(response, data){
    console.log(data);
    response.write("\n");
    response.write(data);
    response.end();
});


// Create an event handler as follows
var connectionHandler = function(response) {
    console.log("Connection Succesful"); 
    response.write("Connection Succesful");
    // Fire the custom event with data 
    eventEmitter.emit('myevent', response, "This is test event");
};

// Bind the connection event with the handler
eventEmitter.on('connection', connectionHandler);

server.listen(8000);