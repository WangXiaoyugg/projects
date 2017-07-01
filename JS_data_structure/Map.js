//set(key,val)
//remove(key)
//has(key)
//get(key)
//clear()
//size()
//keys()
//values()

function Dictionary(){
	var items = {}

	this.has = function(key){
		return key in items;
	}

	this.set = function(key,value){
		items[key] = value
	}

	this.remove = function(key){
		if(this.has(key)){
			delete items[key]
			return true
		}
		return false;
	}

	this.get = function(key){
		return this.has(key)?items[key]:undefined;
	}

	this.values = function(){
		var values = []
		for(var j in items){
			if(this.has(j)){
				values.push(items[j])
			}
		}
		 return values
	}

	this.getItems = function(){
		return items
	}

	this.clear = function(){
		items = {}
	}

	this.size = function(){
		return Object.keys(items).length
	}

	this.keys = function(){
		return Object.keys(items)
	}

}

var dictionary = new Dictionary();
dictionary.set('mike','abc@email.com')
dictionary.set('mary','ert@email.com')
dictionary.set('hery','asd@email.com')
dictionary.set('smith','zcx@email.com')

console.log(dictionary.has('mike'))
console.log(dictionary.size())

console.log(dictionary.keys())
console.log(dictionary.values())
console.log(dictionary.get('smith'))

console.log(dictionary.remove('mike'))
console.log(dictionary.values())
console.log(dictionary.getItems())