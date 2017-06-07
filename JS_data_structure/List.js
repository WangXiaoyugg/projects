function List() {
	this.listSize = 0 //初始化列表元素个数为0
	this.pos = 0  //列表的当前位置
	this.dataStore = [] 
	this.clear = clear
	this.find = find
	this.toString = toString
	this.insert = insert
	this.append = append
	this.remove =remove
	this.front = front //当前元素移动到第一个元素
	this.end = end //当前元素移动到最后一个元素
	this.prev = prev
	this.next = next
	this.length = length
	this.currPos =currPos//返回列表的当前位置
	this.moveTo = moveTo
	this.getElement = getElement //返回当前列表的位置
	this.contains =  contains;
	this.length = length
}

function append (element){
	this.dataStore[this.listSize] = element;
	this.listSize = this.listSize+1;
}
function find(element){
	for(var i=0;i<this.dataStore.length;i++){
		if(this.dataStore[i] === element){
			return i
		}
	}
	return -1;
}
function remove(element){
	var foundAt = this.find(element);
	if(foundAt>-1){
		this.dataStore.splice(foundAt,1);
		this.listSize = this.listSize -1;
		return true
	}
	return false;
}

function length(){
	return this.listSize;
}

function toString(){
	return this.dataStore;
}
function print(value){
	console.log(value)
}
//测试用例
// var names = new List();
// names.append('Cynthia');
// names.append('mike');
// names.append('mary');
// print(names.toString());
// names.remove('mike');
// print(names.toString());

function insert(element,after){
	var insertPos = this.find(after)
	if(insertPos>-1){
		this.dataStore.splice(insertPos+1,0,element);
		this.listSize=this.listSize+1
		return true
	}
	return false
}

function clear(){
	delete this.dataStore;
	this.dataStore = [];
	this.listSize = this.pos = 0;
}
function contains(element){
	for(var i=0;i<this.dataStore.length;i++){
		if(this.dataStore[i]===element){
			return true
		}
	}
	return false
}
function front(){
	this.pos =0;
}
function end(){
	this.pos = this.listSize-1;
}
function prev(){
	if(this.pos > 0){
		this.pos = this.pos -1
	}
}
function next(){
	if(this.pos<this.listSize-1){
		this.pos = this.pos +1
	}
}
function currPos(){
	return this.pos
}
function moveTo(position){
	this.pos = position
}
function getElement(){
	return this.dataStore[this.pos]
}

//测试用例

var names = new List();
names.append('Cynthia');
names.append('mike');
names.append('mary');
names.append('jack');
names.append('bob');
names.append('mumu');
names.front();
print(names.getElement());
// names.end();
print(names.getElement());
names.next()
names.next()
names.next()
names.prev()
print(names.getElement());