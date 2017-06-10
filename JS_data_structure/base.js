//声明和初始化变量
var name;
var age;
var greeting = 'hello world!';
var flag = false;

//算数运算和数学库函数
var a =1;
var b =1.1;
console.log(a+b);
console.log(a*b);
console.log((a+b)*(a-b))
var z=9;
console.log(Math.sqrt(z))
console.log(Math.abs(z))
var c = a*b;
console.log(z.toFixed(2))

//判断结构
var sex='woman';
if(sex ==='man'){
	console.log('you are man')
}else if(sex==='woman'){
	console.log('you are woman')
}else{
	console.log('you sex is double')
}

var score=100;
switch (score){
	case score >89:
	  console.log('优秀');
	  break;
	case score >79:
	  console.log('良好');
	  break;
	case score >69:
	  console.log('中等');
	  break;  
	case score >59:
	  console.log('及格');
	  break;
	case score < 60:
	  console.log('不及格');
	  break;
	default:
	  console.log('bad input')       
}

//循环结构
var n=1;
var sum =0;
while(n<=10){
	sum +=n;
	n++;
}
console.log(sum)

var num=1;
var result =0;
for(var num=1;num<11;num++){
	result += num;
	num++;
}
console.log(num);

//函数
function sayName(name){
	if(typeof name !== 'string'){
		return false
	}
	console.log('my name is '+ name);
	return true;
}
sayName('mike');
sayName('mary');

function curve(arr,amount){
	for(var i=0;i<arr.length;i++){
		arr[i]+=amount
	}
	return arr;
}
var grades = [100,80,74,66]
curve(grades,5)
console.log(grades)


//变量作用域
function showScope(){
	scope = 'local'
	return scope;
}
var scope = 'global';
console.log(scope)
console.log(showScope())
console.log(scope)

//递归
function factorial(n){
	if(n==1){
		return n
	}else{
		return n*factorial(n-1)
	}
}

console.log(factorial(5));

//面向对象编程
function Checking(amount){
	this.balance = amount;
	this.deposit = deposit;
	this.withdraw = withdraw;
	this.toString = toString;
}

function deposit(amount){
	this.balance += amount;
}

function withdraw(amount){
	if(amount <= this.balance){
		this.balance = this.balance -amount
	}else{
		console.log('insufficient funds')
	}
}

function toString(){
	return 'Balance: '+ this.balance;
}
var account = new Checking(1000);
account.deposit(1000);
console.log(account.toString());
account.withdraw(500);
console.log(account.toString());
account.withdraw(2000);
console.log(account.toString())