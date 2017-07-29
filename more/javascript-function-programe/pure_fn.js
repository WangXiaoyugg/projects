//纯函数是这样一种函数，即相同的输入，
//永远会得到相同的输出，
//而且没有任何可观察的副作用

var print = console.log.bind(console)

var xs = [1,2,3,4,5]

xs.slice(0,3) //[1,2,3]

xs.slice(0,3) //[1,2,3]
             
//不纯的
xs.splice(0,3) //[1,2,3]

xs.splice(0,3) //[4,5]

xs.splice(0,3) //[]

//不纯的
var minmum = 21
var checkAge = function(age){
	return age >= minmum;
}

//纯的
var checkAge = function (age) {
	var minmum = 21
	return age >= minmum 
}

//不可变对象              
var immutableState = Object.freeze({
	minmum:21
})

//副作用是在计算结果的过程中，
//系统状态的一种变化，
//或者与外部世界进行的可观察的交互

//更改文件系统
//往数据库插入记录
//可以发送一个HTTP请求
//可变数据
//打印log
//获取用户输入
//dom查询
//访问系统状态


// 只要是跟函数外部环境发生的交互就都是副作用
// 相同输入得到相同输出

var toLowerCase = {
	"A":'a',
	"B":"b",
	"C":'c',
	"D":'d',
	"E":'e',
	'F':'f',
}

toLowerCase['C'] //'c'

// 纯函数就是数学上的函数，而且是函数式编程的全部

var isPrime = {
	1:false,
	2:true,
	3:true,
	4:false,
	5:true,
	6:false,
}
isPrime[3]; //true


//纯函数总能够根据输入来做缓存。实现缓存的一种典型方式是 memoize 技术



var memoize = function (fn) {
	var cache = {}

	return function(){
		var arg_str = JSON.stringify(arguments)
		print('arg_str',arg_str);
		cache[arg_str] = cache[arg_str] || fn.apply(fn,arguments)
		return cache[arg_str];	
	}	
}

var squareNumer = memoize(function (x) {
	return x*x
})

squareNumer(4) //16

squareNumer(4) //从缓存中读取输入值为4的结果
               
squareNumer(5) // 25

squareNumer(5) //从缓存中读取输入值为5的结果


//可以通过延迟执行的方式把不纯的函数转换为纯函数
var pureHttpCall = memoize(function(url,params){
	return function(){return $.getJSON(url,params)}
})

//纯函数的依赖很明确，因此更易于观察和理解

var signUp = function(attrs){
	var user = saveUser(attrs)
	welcomeUser(user)
}

var saveUser = function(attrs){
	var user = Db.save(attrs)
	return user
}

var welcomeUser = function(user){
	Email(user,'.....')
}

//纯函数
// 纯函数对于其依赖必须要诚实
var signIn = function(Db,Email,attrs){
	return function(){
		var user = saveUser(Db,attrs)
		welcomeUser(Email,user)
	}
}
var saveUser = function(Db,attrs){
	//...
}
var welcomeUser = function(Email,user){
	//...
}

//“面向对象语言的问题是，它们永远都要随身携带那些隐式的环境。
//你只需要一个香蕉，但却得到一个拿着香蕉的大猩猩...以及整个丛林”。
//
//纯函数让测试更加容易。我们不需要伪造一个“真实的”支付网关，
//或者每一次测试之前都要配置、
//之后都要断言状态（assert the state）
//只需简单地给函数一个输入，然后断言输出就


//纯函数最大的好处是引用透明性

var Immutable = require('immutable')

var decrementHP = function(player){
	return player.set('hp',player.hp-1)
}

var isSameTeam = function(player1,player2){
	return player1.team === player2.team
}

var punch = function(player,taeget){
	if(isSameTeam(player,taeget)){
		return target
	}else{
		return decrementHP(target)
	}
}

var jobe = Immutable.Map({name:'Jobe',hp:20,team:'red'})
var michael = Immutable.Map({name:'Michael',hp:20,team:'green'})
 
punch(jobe,michael) //=> Immutable.Map({name:"Michael", hp:19, team: "green"})

// 我们可以并行运行任意纯函数。因为纯函数根本不需要访问共享的内存，而且根据其定义，纯函数也不会因副作用而进入竞争态
// 
// 如果手头没有一些工具，那么纯函数程序写起来就有点费力。我们不得不玩杂耍似的通过到处传递参数来操作数据，而且还被禁止使用状态，更别说“作用”了