var express = require('express')
var ddd = express.Router()

ddd.get('/:name',function(req,res){
	// res.send('hello, '+req.params.name)
	
	res.render('users',{
		name:req.params.name
	})
})

module.exports = ddd;