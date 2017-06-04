var express = require('express')
var app = express()
var indexRouter = require('./routes/index')
var userRouter = require('./routes/users')

var path = require('path')

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

app.use('/',indexRouter)
app.use('/users',userRouter)
app.listen(8888)






// app.get('/',function(req,res){
// 	res.send('hello,express!')
// })
// app.get('/users/:name',function(req,res){
// 	res.send('hello, '+req.params.name)
// })
// app.listen(8888)













// app.get('/',function(req,res){

//     res.send('hello,express! this is a myblog')
   
// })
// app.listen(8888)

