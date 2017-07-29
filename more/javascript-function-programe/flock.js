//海鸥程序

// var Flock = function(n){
// 	this.seagulls = n;
// }

// Flock.prototype.conjoin = function(other) {
// 	this.seagulls += other.seagulls
// 	return this;
// }

// Flock.prototype.breed = function(other){
// 	this.seagulls = this.seagulls * other.seagulls;
// 	return this;
// }

// var flock_a = new Flock(4);
// var flock_b = new Flock(2);
// var flock_c = new Flock(0); 

// var result = flock_a.conjoin(flock_c).breed(flock_b)
//                     .conjoin(flock_a.breed(flock_b)).seagulls;
// console.log('result',result) //32是错误的


//函数式
// var conjoins = function (flock_x,flock_y) {
// 	return flock_x + flock_y;
// }

// var breeds = function (flock_x,flock_y) {
// 	return flock_x * flock_y;
// }
// var flock_m = 4;
// var flock_n = 2;
// var flock_o = 0;
// var ret = conjoins(breeds(flock_n,conjoins(flock_m,flock_o)),breeds(flock_m,flock_n))

// console.log('ret',ret)

let add = function (x,y) {
	return x+y
}
let multiply = function (x,y) {
	return x*y
}
const flock_d = 4
const flock_e = 2
const flock_f = 0

var ret = add(multiply(flock_e,add(flock_d,flock_f)),multiply(flock_d,flock_e))

console.log('ret',ret)

//结合律
// add(add(x,y),z ) == add(x,add(y,z))
// 交换律
// add(x,y) == add(y,x)
// 同一律
// add(x,0) == add(x)
// 分配律
// multiply(x,add(y,z)) == add(multiply(x,y),multiply(x,z))

// var result = add(multiply(flock_e,flock_d),multiply(flock_d,flock_e))
var result = multiply(flock_e,add(flock_d,flock_d));
console.log('result',result)