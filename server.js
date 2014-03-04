var connect = require('connect');
var port = 4000;

connect.createServer(
	connect.static(__dirname)
).listen(4000);
console.log('Your connect at port '+port);
