const http = require('http')
const fs = require('fs')
const url = require('url')

const port = process.env.PORT || 8888;

var server = http.createServer(function(req,res){
	var tmp = url.parse(req.url,true)
	var path = tmp.pathname
	var query = tmp.query
	var method = req.method

	if(path === '/'){
		var str = fs.readFileSync('./index.html')
		res.setHeader('Content-Type', 'text/html;charset=utf-8')
		res.end(str)
	}else if(path === '/style.css'){
		var str = fs.readFileSync('./style.css')
		res.setHeader('Content-Type','text/css')
		res.end(str)
	}else if(path === '/main.js'){
		var str = fs.readFileSync('./main.js')
		res.setHeader('Content-Type','application/javascript')
		res.end(str)
	}else if(path === '/index'){
		res.setHeader('Content-Type','text/html;charset=utf-8')
		res.end(`
			<!DOCTYPE html>
			<h1>here is index Html</h1>
			<link rel="stylesheet" href="/style.css" />	
			<button id='btn'>点我<button>
			<script src='main.js'></script>
			`)
	}else if(path === '/data'){
		res.end('{"name":"garen","age":20}')
	}else if (path === '/xxxx'){
		res.end('nothing is in the page')
	}else{
		res.statusCode = 404
		res.setHeader('Content-Type','text/html;charset=utf-8')
		res.end('此路径对应的页面不存在')
	}

	console.log(method + ' '+ req.url)
})
server.listen(port)
console.log('监听'+ port + '端口成功,请在浏览器中输入http://localhost:'+port) 