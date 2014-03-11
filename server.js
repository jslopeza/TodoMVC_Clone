var connect = require('connect');
var port = 3000;

connect.createServer(
	connect.static(__dirname)
	).listen(3000);
console.log('Your connect at port '+port);