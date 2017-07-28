var express = require('./lib/express')
var path = require('path')
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({extended:false})
var mimeType = require('./lib/mime')

var app = express()

app.use(urlencodedParser)
app.use(mimeType)
app.use(express.static(path.join(__dirname,'static')))
app.set('views',path.join(__dirname,'views'))
// app.use(express.static(path.join(__dirname,'public')))

app.use(function(req,res,next){
	console.log('middleware 1')
	next()
})

app.use(function(req,res,next){
	console.log('middleware 2')
	next()
})

app.use('/hello',function(req,res){
	console.log('/hello...')
	res.send('hello world')
})

app.use('/getWeather',function(req,res){
	res.send({url:'/getWeather', city: req.query.city})
})

app.use('/search',function(req,res){
	res.send(req.body)
})

app.use('/about',function(req,res){
	res.render('about.html',{
		title:'简易的express框架',
		author:'Garen',
		date:'2017/7/9',
		info:'一个热爱生活小前端'
	})
})

app.use(function(req,res){
	res.send(404,'not found')
})


module.exports = app