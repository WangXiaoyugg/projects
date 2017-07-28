//thie array of javascript is object,
//so effient is not better than other languages

function print(val){
	console.log(val);
}
//创建数组
var numbers = [];
print(numbers.length); //0
                       
var num = [1,2,3,4,5]
print(num.length);//5

var arr = new Array();
print(arr.length);//0

var arr1 = new Array(1,2,3,4)
print(arr1);//4                       

var arr2 = new Array(10);
print(arr2);//10

var obj =[1,'xiaoming',true,null,undefined];

var arr3 = [1,2,4];
var number = 100;
print(Array.isArray(number));//false;
print(Array.isArray(arr3)); //true

//读写数组
var nums=[];
for(var i=0;i<100;i++){
	nums[i]=i+10;
}

var num1=[1,2,3,4];
var sum = num1[1]+num1[2]+num1[3]+num1[4];
print(sum)

var num2=[1,2,3,4,10];
var sum1=0
for(var i=0;i<num2.length;i++){
	sum1 += num2[i]
}
print(sum1);

//字符串生成数组
var sentence = 'today is Sunday';
var words = sentence.split(' ');
for(var i=0;i<words.length;i++){
	print('word '+ i+' : '+words[i])
}

//数组的整体操作
var num3=[];
for(var i=0;i<10;i++){
	num3[i]=i+1;
}
//一个引用修改了数据，另一个引用的数组也会发生变化
var samenum3=num3 //引用赋值，浅赋值
//深复制
function copy(arr1,arr2){
	for(var i=0;i<arr1.length;i++){
		arr2[i]=arr1[i]
	}
}

//存取函数
//查找元素
var names =['xiaoming','mary','mike']
var name='mike'
var position = names.indexOf(name);
if(position >=0){
	print('found '+name+ 'at position'+position)
}else{
	print(name+'not found in array')
}

names = ['david','mike','mary','bob','mike','hary']
name = mike;
var firstPos = names.indexOf(name);
print('first found '+name +'at position'+firstPos);
var lastPos = names.indexOf(name);
print('last found '+name +'at position'+lastPos);

//数组的字符串表示
var fruit = ['apple','banana','pear','orange']
var fruitStr = fruit.join();
print(fruitStr);
fruitStr = fruit.toString();
print(fruitStr);
print(fruit);

//有已有的数组创建新数组
var arr4 = ['mike','john']
var arr5 = ['smith','mary']
var merge = arr4.concat(arr5)
print(merge)
merge = arr5.concat(arr4)
print(merge)

var arr6 = [1,2,3,4,5,6];
var arr7 = arr6.splice(1,3)
print(arr6);
print(arr7);

//可变函数
var num4=[1,2,3]
num4.push(4)
print(num4)
num4[num4.length]=5

var num5 = [2,3,4]
var newnum =1;
var n = num5.length;
for(var i=n;i>0;i--){
	num5[i]=num5[i-1];
}
num5[0]=newnum;
print(num5);//元素越多，效率越低

//unshift添加元素
var num6 = [2,3,4]
print(num6)
num6.unshift(1)

//数组中删除元素
var num7 =[1,2,3]
num7.pop()
print(num7)

//删除第一个元素
var num8 = [1,2,3]
for(var i=0;i<num8.length;i++){
	num8[i]=num8[i+1];
}
num8.shift()
//pop和shift都将删除的元素作为方法的返回值返回，用变量保存

//数组中间位置添加和删除元素
//splice(起始索引，删除的元素个数，想要添加的元素)
var num9 = [1,2,3,5]
num9.splice(2,0,4)

//数组排序
arr.reverse()
arr.sort();//有bug

function compare(nums1,nums2){
	return nums1-nums2
}
var num10 = [3,1,4,100,200,300]
num10.sort(compare)

//迭代器方法
//1.返回一个值，要么执行某种操作
function square(num){
	print(num*num)
}
var nums = [1,2,3,10]
nums.forEach(square)
function isEven(val){
	return val%2==0
}
var num11 = [1,2,3,4]
var even = num11.every(isEven)
if(even){
	print('all number is even');
}else{
	print('not all number are even');
}

var someEven = num11.some(isEven)
if(someEven){
	print('some numbers are even')
}else{
	print('no number are even')
}


function add(cur,next){
	return cur +next
}
var num12=[1,2,3,4,5];
var sum2 = num12.reduce(add)
// reduceRight() ruduce从右向左执行

//生成新数组的迭代器方法
function curve(grade){
	return grade += 5;
}
var grades = [100,101,102,30]
var newgrades = grades.map(curve)

//filter返回一个新数组
function passing(num){
	return num >= 60;
}
var grades = [];
for(var i=0;i<20;i++){
	grades[i] = Math.floor(Math.random()*101);
}
var passGrades = grades.filter(passing);

function after(str){
	if(str.indexOf('cie')>-1){
		return true
	}
	return false;
}
var words = ['cie','adac','ciet','adax']
var result1 = words.filter(after)

//二维数组和多维数组
var twod = [];
var rows = 5;
for(var i=0;i<rows;i++){
	twod[i]=[]
}
Array.matrix = function(rows,cols,initial){
	var arr= [];
	for(var i=0;i<rows;i++){
		var columns = [];
		for(var j=0;j<cols;j++){
			columns[j]=initial;
		}
		arr[i]=columns
	}
	return arr;
}
var arr8 = Array.matrix(5,5,0)

var grades1=;[[88,77,66],[11,22,33],[33,22,11]]
print(grades1[1][1])

//处理二维数组
//按行或按列访问
//1. 按列访问，外层是行，内层是列
var total = 0;
var average = 0.0;
for(var row=0;row<grades1.length;row++){
	for(var col=0;col<grades1[row].length;col++){
		total += grades1[row][col]
	}
	average = total /grades1[row].length;
	print('Student '+ parseInt(row+1) + " average :"+ average.toFixed(2))
	total = 0;
	average = 0;
}
//2.按行访问

var total =0;
var average =0;
for(vaar col=0;col<grades1.length;col++){
	for(var row=0;row<grades1[col].length;row++){
		total += grades1[row][col];
	}
	average = total /grades1[col].length;
	print('Student '+ parseInt(col+1) + " average :"+ average.toFixed(2))
	total = 0;
	average = 0;
}

//参差不齐的数组,直接使用上面代码可用
var grades2 = [[88,77],[44,33,22],[11,222,333]]

//对象数组
function Point(x,y){
	this.x = x;
	this.y = y;
}
function displayPts(arr){
	for(var i=0;i<arr.length;i++){
		print(arr[i].x+ ' , '+arr[i].y)
	}
}

//对象中的数组
function weekTemps(){
	this.dataStore = []
	this.add = add;
	this.average = average
}

function add(temp){
	this.dataStore.push(temp)
}
function average(){
	var total = 0;
	for(var i=0;i<this.dataStore.length;i++){
		total += this.dataStore[i]
	}
	return total / this.dataStore.length;
}

//练习未做
