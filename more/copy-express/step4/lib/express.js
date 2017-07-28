var url = require('url')

function express(){

	var tasks = []

	var app = function(req,res){
		makeQuery(req)
		makeResponse(res)

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

	return app
}

express.static = function(path){
	return function(req,res){

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


module.exports = express




