//put(key,value)
//remove(key)
//get(key)



function HashMap(){
	var Map = [];

	//散列函数,会产生冲突
	var loseloseHashCode = function(key){
		var hash = 0;
		for(var i =0;i<key.length;i++){
			hash += key.charCodeAt(i)
		}
		return hash % 37;//为了得到比较小的数值，我们会使用hash值和一个任意数做除法的余数（mod）。
	}

	//更加的好散列函数
	var djb2HashCode = function(key){
		var hash = 5381;
		for(var i=0;i<key.length;i++){
			hash = hash*33 + key.charCodeAt(i)
		}
		return hash % 1033;
	}

	this.put = function(key,value){
		var position = djb2HashCode(key);
		console.log(position +'-' + key)
		Map[position] = value
	}

	this.get = function(key){
		return Map[djb2HashCode(key)]
	}

	this.remove = function(key){
	   Map[djb2HashCode(key)] = undefined;
	}

	// this.put = function(key,value){
	// 	var position = loseloseHashCode(key);
	// 	console.log(position +'-' + key)
	// 	Map[position] = value
	// }

	// this.get = function(key){
	// 	return Map[loseloseHashCode(key)]
	// }

	// this.remove = function(key){
	//    Map[loseloseHashCode(key)] = undefined;
	// }

	this.print = function(){
		for(var i=0;i<Map.length;i++){
			if(Map[i] !== undefined){
				console.log(i + ':'+ Map[i])
			}
		}
	}



	this.ValuePair = function(key,value){
		this.key = key;
		this.value = value;

		this.toString = function(){
			return '['+this.key+'-'+this.value+']'
		}
	}

	// this.put = function(key,value){
	// 	var position = loseloseHashCode(key)
	// 	if(Map[position] == undefined){
	// 		Map[position] = new LinkedList();
	// 	}
	// 	Map[position].append(new ValuePair(key,value))
	// }

	// this.get = function(key){
	// 	var position = loseloseHashCode(key);
	// 	if(Map[position] !== undefined){
	// 		var current = Map[position].getHead();

	// 		while(current.next){
	// 			if(current.element.key === key){
	// 				return current.element.value
	// 			}
	// 			current = current.next
	// 		}

	// 		if(current.element.key === key){
	// 			return current.element.value;
	// 		}
	// 	}

	// 	return undefined;
	// }

	// this.remove = function(key){
	// 	var position =loseloseHashCode(key)
	// 	if(Map[position] !== undefined){
	// 		var current = Map[position].getHead()
	// 		while(current.next){
	// 			if(current.element.key === key){
	// 				Map[position].remove(current.element)
	// 				if(Map[position].isEmpty()){
	// 					Map[position] = undefined;
	// 				}
	// 				return true;		
	// 			}
	// 			current = current.next;
	// 		}

	// 		if(current.element.key === key){
	// 			Map[position].remove(current.element)
	// 			if(Map[position].isEmpty()){
	// 				Map[position] = undefined
	// 			}
	// 			return true;
	// 		}
	// 	}

	// 	return false;
	// }	

	//线性探查
	// this.put = function(key,value){
	// 	var position = loseloseHashCode(key)
	// 	if(Map[position] === undefined){
	// 		Map[position] = new ValuePair(key,value);
	// 	}else{
	// 		var index = position+1;
	// 		while(Map[index] !== undefined){
	// 			index++
	// 		}
	// 		Map[index] = new ValuePair(key,value)
	// 	}
	// }

	// this.get = function(key){
	// 	var position = loseloseHashCode(key)
	// 	if(Map[position] !== undefined){
	// 		if(Map[position].key === key){
	// 			return table[position].value
	// 		}else{
	// 			var index = position+1;
	// 			while(Map[index] === undefined || Map[index].key !== key){
	// 				index++;
	// 			}
	// 			if(Map[index].key === key){
	// 				return Map[index].value
	// 			}
	// 		}
	// 	}
	// 	return undefined
 //    }

}




// var hash = new HashMap();
// hash.put('Gandalf', 'gandalf@email.com');
// hash.put('John', 'johnsnow@email.com');
// hash.put('Tyrion', 'tyrion@email.com');

// console.log(hash.get('Gandalf'));f
// console.log(hash.get('Loiane'));

// hash.remove('Gandalf');
// console.log(hash.get('Gandalf'));

//散列值相同
var hash = new HashMap();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');
hash.put('Aaron', 'aaron@email.com');
hash.put('Donnie', 'donnie@email.com');
hash.put('Ana', 'ana@email.com');
hash.put('Jonathan', 'jonathan@email.com');
hash.put('Jamie', 'jamie@email.com');
hash.put('Sue', 'sue@email.com');
hash.put('Mindy', 'mindy@email.com');
hash.put('Paul', 'paul@email.com');
hash.put('Nathan', 'nathan@email.com');

hash.print()

//出现覆盖，分离链接、线性探查、双散列法
//分离链接法包括为散列表的每一个位置创建一个链表并将元素存储在里面。它是解决冲突的
//最简单的方法，但是它在HashTable实例之外还需要额外的存储空间

