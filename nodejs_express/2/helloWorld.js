// var http = require('http')
// http.createServer(function(req,res){
// 	res.writeHead(200,{'Content-Type':'text/html'})
// 	res.end('<h1>Hello world!</h1>')
// }).listen(8888)


var http = require('http')
var fs = require('fs')
function serverStaticFile(res,path,contentType,responseCode){
	responseCode = responseCode || 200;
	fs.readFile(__dirname+path, function(err,data){
		if(err){
			res.writeHead(500,{'Content-Type':'text/plain'})
			res.end('500 - INTERNAL ERROR')		
		}else{
			res.writeHead(responseCode,{'Content-Type':contentType})
			res.end(data);	
		}
	})
}

http.createServer(function(req,res){
	var path = req.url.replace(/\?(?:\?.*)?$/,"");
	switch(path){
		case '/':
			serverStaticFile(res,'/home.html','text/html',200)
			break;
		case '/about':
			serverStaticFile(res,'/about.html','text/html')
			break;
		case '/img/logo':
			serverStaticFile(res,'/img/logo.jpg','image/png')
			break;
		default:
			serverStaticFile(res,'/404.html','text/html',404)
			break;				
	}
}).listen(8888)
console.log('server start at localhost:8888;press Ctrl-C to end ...')