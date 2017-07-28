var express = require('express')
var app =express()
//若端口被占用，覆盖该占用的端口为我所用
app.set('port',process.env.PORT || 3000)

//设置视图引擎
var handlebars = require('express3-handlebars').create({defaultLayout:'main'})
					
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');

//设置静态资源路径
app.use(express.static(__dirname+'/public'));

var fortunes = [
	'奥利奥','小当家','小涴熊','乐事薯片'
]

//路由
app.get('/',function(req,res){
	// res.type('text/plain')
	// res.send('Meadowlark Travel')
	res.render('home')
})

app.get('/about',function(req,res){
	// res.type('text/plain')
	// res.send('About Meadowlark Travel')
	
	var randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)]

	res.render('about',{fortune: randomFortune});
})




//页面
app.use(function(req,res,next){
	// res.type('text/plain')
	// res.status(404)
	// res.send('404 - Not Found')
	res.status(404)
	res.render('404')
})

app.use(function(err,req,res,next){
	console.log(err)
	// res.type('text.plain')
	res.status(500)
	// res.send('500 - Server Error')
	res.render('500')
})

app.listen(app.get('port'),function(){
	console.log('Express started on http://localhost:'+
		app.get('port')+' ; press Ctrl-c to end.'
	)
})