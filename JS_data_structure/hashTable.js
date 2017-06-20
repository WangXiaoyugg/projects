function hashTable(){
	this.table = new Array(137);
	this.simpleHash = simpleHash;
	this.showDistro = showDistro;
	this.put =put;
	// this.get =get;
}

function simpleHash(data){
	var total = 0;
	for(var i=0;i<data.length;i++){
		total += data.charCodeAt(i)
	}
	console.log('hash value: '+data +'->'+total)
	return total % this.table.length;
}

function put(data){
	var pos = this.simpleHash(data);
	this.table[pos] = data;
}
function showDistro(){
	var n=0;
	for(var i=0;i<this.table.length;i++){
		if(this.table[i]!==undefined ){
			console.log(i + ' : ' + this.table[i])
		}
	}
}

var someNames = ['mike','david','jenifer','raymond','clayton','danny',
	'cynthia','danness'
]
var hTable = new hashTable();
for(var i=0;i<someNames.length;i++){
	hTable.put(someNames[i])
}
hTable.showDistro();