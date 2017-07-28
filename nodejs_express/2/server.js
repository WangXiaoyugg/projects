var http = require('http')
http.createServer(function(req,res){
	//规范化url,去调查询字符串、可选的反斜杠、并把它变成小写
	var path = req.url.replace(/\/?(?:\?.*)?$/,'').toLowerCase()
	switch(path){
		case '':
			res.writeHead(200,{'Content-Type':'text/plain'});
			res.end('HomPage');
			break;
		case '/about':
			res.writeHead(200,{'Content-Type':'text/plain'})
			res.end('About')
			break;
		default:
			res.writeHead(404,{'Content-Type':'text/plain'})
			res.end('Not Found')
			break;
	}
}).listen(8888)


console.log('server start at localhost:8888;press Ctrl-C to end ...')