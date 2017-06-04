var express = require('express')
var app = express()


//three
app.use(function(req,res,next){
	console.log(123)
	next(new Error('bad params'))
})

app.use(function(req,res,next){
	console.log(222);
	res.status(200).end()
})


app.use(function(err,req,res,next){
	console.log(err.stack)
	res.status(500).send('Bad GateWay')
})


//two
// app.use(function(req,res,next){
// 	console.log(123)
// 	next(new Error('bad params'))
// })

// app.use(function(req,res,next){
// 	console.log(222);
// 	res.status(200).end()
// })


//first
// app.use(function(req,res,next){
// 	console.log(123)
// 	next()
// })

// app.use(function(req,res,next){
// 	console.log(222)
// 	res.status(200).end()
// })

app.listen(8888)