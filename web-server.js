var http = require('http');

var s = http.createServer(function(req, res){
	res.writeHEAD(200, {'CONTENT-TYPE': 'TEXT/PLAIN' });
	res.write("hello\n");
	setTimeout(function(){
	res.end("world\n");
}, 2000);	
});

s.listen(8000);