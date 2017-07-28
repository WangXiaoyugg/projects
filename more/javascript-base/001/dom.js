function Element(id){
	this.elem = document.getElementById(id)
}

Element.prototype.html = function(val){
	if(val){
		elem.innerHTML = val
		return this //是为了链式操作
	}else{
		return  elem.innerHTML
	}
}

Element.prototype.on =function(type,fn){
	var elem = this.elem
	elem.addEventListener(type,fn)
	return this;
}

var div1 = new Element('div1')
console.log(div1.html())

div1.html('<p>hello world </p>').on('click',function(){
	console.log('clicked')
}).html('<h1>javascript</h1>')
