var http = require('http');
var events = require('events');

var eventEmitter = new events.EventEmitter();

var server = http.createServer(function(request, response) {
    response.writeHead('200', {'Content-Type':200});
    var connectionHandler = function() {
        console.log("Connection Succesful");
        response.write("Connection Succesful");
        
    };
    
    eventEmitter.on('connection', connectionHandler);
    
    eventEmitter.emit('connection');
    response.end();
});

server.listen(8000);