var url = require('url')
var path = require('path')
var fs = require('fs')
var ejs = require('ejs')


function express(){

	var tasks = []

	var app = function(req,res){
		makeQuery(req)
		makeResponse(res)
		makeRender(req,res,app)

		var i = 0

		function next(){
			var task = tasks[i++]
			if(!task){
				console.log('task not exist')
				return false
			}

			//如果是普通的中间件 或者 是路由匹配上的中间件  
			if(task.routePath === null ||
			   url.parse(req.url,true).pathname === task.routePath){
			   task.middleWare(req,res,next)
			}else{
				next()
			}
		}

		next() //递归调用，直到任务为空
	}


	app.use = function (routePath,middleWare) {
		if(typeof routePath === 'function'){
			middleWare = routePath;
			routePath = null
		}

		tasks.push({
			routePath:routePath,
			middleWare:middleWare
		})
	}

	app.data = {}
	app.set = function(key,value){
		app.data[key] = value
	}

	app.get = function(key){
		return app.data[key]
	}

	return app
}

express.static = function(staticPath){
	return function(req,res,next){

		var pathObj = url.parse(req.url,true)

		if(pathObj.pathname === '/'){
			pathObj.pathname += 'index.html'
		}

		var filePath = path.join(staticPath,pathObj.pathname)

		fs.readFile(filePath, 'binary', function(err,content){
			if(err){
				next()
			}else{
				res.writeHead(200, 'Ok')
        		res.write(content, 'binary')
        		res.end()        
			}
		})
	}
}

//处理get请求的参数
function makeQuery(req){
	var pathObj = url.parse(req.url,true)
	req.query = pathObj.query
	console.log(req.query)
}

//处理响应的结果
function makeResponse(res){
	res.send  = function(toSend){
		if(typeof toSend === 'string'){
			res.end(toSend)
		}
		if(typeof toSend === 'object'){
			res.end(JSON.stringify(toSend))
		}
		if(typeof toSend === 'number'){
			res.writeHead(toSend,arguments[1])
			res.end()
		}
	}
}

//ejs的模板渲染
function makeRender(req,res,app){
	res.render = function(tplPath,data){
		var fullPath = path.join(app.get('views'),tplPath)
		ejs.renderFile(fullPath,data,{},function(err,str){
			if(err){
				console.log(err);
				res.writeHead(503,'System error')
				res.end()
			}else{
				res.setHeader('content-type', 'text/html')
				res.writeHead(200,'ok')
				res.write(str)
				res.end()
			}
		})
	}
	
}

module.exports = express




