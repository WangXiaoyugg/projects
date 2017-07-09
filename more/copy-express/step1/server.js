var http = require('http')

var server = http.createServer(function(req,res){
	res.setHeader('Content-Tye', 'text/html;charset=utf-8')

	res.writeHead(200,'OK')
	res.write('<head><title>server</title></head>')
	res.write('<body><h1>hello server </h1></body>')

	res.end()
})


server.listen(8080)
console.log('open at http://localhost:8080')