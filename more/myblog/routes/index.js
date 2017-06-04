var express = require('express')
var aaa = express.Router();

aaa.get('',function(req,res){
	res.send('hello world!')
})

module.exports = aaa;