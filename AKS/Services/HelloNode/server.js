'use strict';
var http = require('http');
var port = process.env.PORT || 80;

var fileSystem = require('fs');
app.use(express.static(__dirname + '/public'));

http.createServer(function (req, resp) {
    // res.writeHead(200, { 'Content-Type': 'application/json' });
    // res.end('{ "message": "Hello World from Node.js updated", "port": ' + port + ' }');

    fileSystem.readFile('./index.html', function(error, fileContent){
		if(error){
			resp.writeHead(500, {'Content-Type': 'text/plain'});
			resp.end('Error');
		}
		else{
			resp.writeHead(200, {'Content-Type': 'text/html'});
			resp.write(fileContent);
			resp.end();
		}
    });
    

}).listen(port, _cb => {
    console.log('started on port: ' + port);
});