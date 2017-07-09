var http = require('http')
var fs = require('fs')
var path = require('path')
var url = require('url')

var server = http.createServer(function(req,res){
	routePath(req,res)
})

var routes = {
	'/hello':function(req,res){
		res.end('match /hello, query is '+ JSON.stringify(req.query) )
	},
	'/about':function(req,res){
		res.end('match /about, query is '+ JSON.stringify(req.query) )
	},
	'/about/me':function(req,res){
		res.end('match /about/me, query is '+ JSON.stringify(req.query) )
	},
	'/search':function(req,res){
		res.end('username = '+req.body.username +', password = '+req.body.password)
	},	
}

function routePath(req,res){
	var pathObj = url.parse(req.url,true)

	var handleFn = routes[pathObj.pathname]

	if(handleFn){
		req.query = pathObj.query

		console.log(req.query)

		var body = ''
		req.on('data',function(chunk){
			body += chunk
		}).on('end',function(){
			req.body = parseBody(body)
			handleFn(req,res)
		})

	}else{
		staticRoot(path.join(__dirname,'static'),req,res)
	}
}

function staticRoot(staticPath,req,res){
	var pathObj = url.parse(req.url,true)
	
	if(pathObj.pathname === '/'){
		pathObj.pathname += 'index.html'
	}
	var filePath = path.join(staticPath,pathObj.pathname)


	fs.readFile(filePath,'binary',function(err,content){
		if(err){
			res.writeHead(404,'not found page')
			res.end()
		}else{
			res.writeHead('200','ok')
			res.write(content,'binary')
			res.end()
		}
	})
}

//解析post请求
function parseBody(body){
	var obj = {}
	body.split('&').forEach(function(str){
		obj[str.split('=')[0]] = str.split('=')[1]
	})
	return obj
}

server.listen(8080)
console.log('open localhost:8080')