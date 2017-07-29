const print = console.log.bind(console)

var hi = function(name){
	return 'Hi ' + name
}

var greeting = function(name){
	return hi(name)
}
//用一个函数把另一个函数包起来，目的仅仅是延迟执行，
//真的是非常糟糕的编程习惯

var greet = hi
print(greet('times'))
print(greeting('xiaoming'))

//too stupid
var getServerStuff =  function(callback){
	return ajaxCall(function(json){
		return callback(json)
	})
}

//better
var getServerStuff = ajaxCall;

//return ajaxCall(function(json){
		// return callback(json)
// })
//等价于
//return ajaxCall(callback)

//重构下getServerStuff
var getServerStuff = function(callback){
	return ajaxCall(callback)
}
//就等价于
var getServerStuff = ajaxCall

//可笑的控制器 controller 99% 代码是垃圾
var BlogController = (function () {
	
	var index = function (posts) {
		return Views.index(posts)
	}

	var show = function(post){
		return Views.show(post)
	}

	var create = function (attrs) {
		return Db.create(attrs)
	}

	var update = function (post,attrs) {
		return Db.update(post,attrs)
	}

	var destory = function (post) {
		return Db.destory(post)
	}

	return {index:index,show:show,create:create,update:update,destory:destory}


})()

//或者直接全部删掉，
//因为它的作用仅仅就是把视图（Views）
//和数据库（Db）打包在一起而已
var BlogController = {
	index:Views.index,
	show:Views.show,
	create:Db.create,
	update:Db.update,
	destory:Db.destory
}

//httpGet 要改成可以抛出一个可能出现的 err 异常
httpGet('/post/2',function (json) {
	return renderPost(json)
})

//把整个应用里的所有 httpGet 调用都改成这样，可以传递 err 参数
httpGet('/post/2',function (json,err) {
	return renderPost(json,err)
})

//写成一等公民函数
// renderPost 将会在 httpGet 中调用，想要多少参数都行
httpGet('/post/2',renderPost)

//只针对当前的博客
var validArticle = function (articles) {
	return articles.filter(function (articles) {
		return articles !== null && article !== undefined;
	});
}

//对未来的项目友好太多
var compact = function (xs) {
	return xs.filter(function (x) {
		return x !== null && x !== undefined
	});
}

var fs = require('fs')

//可怕
fs.readFile('freaky_friday.txt',Db.save)

//好一点
fs.readFile('freaky_friday.txt',Db.save.bind(Db))


