'use strict'

function loadImage(images,callback,timeout){
	var count = 0;
	var success = true;
	var timeoutId = 0;
	var isTimeout = false;

	for(key in images){
		if(!images.hasOwnProperty(key)){
			continue;
		}

		var item = images[key]

		if(typeof item === 'string'){
			item = images[key]= {
				src:item
			}
		}

		if(!item || !item.src){
			continue;
		}

		count++;

		item.id = '__img__'+key+ getId();

		item.img = window[item.id] = new Image();

		doLoad(item);

	}

	if(!count){
		callback(success)
	}else if(timeout){
		timeoutId = setTimeout(onTimeout, timeout)
	}


	function doLoad(item){

		item.status = 'loading'

		var img = item.img;

		img.onload = function(){
			success = success && true;
			item.success = 'loaded';
			done()
		}

		img.onerror = function(){
			success = false;
			item.status = 'error';
			done()
		}

		img.src = item.src;

		function done(){
			img.onload = img.onerror = null;

			try{
				delete window[item.id]
			}catch(e){
				console.log(e)
			}

			if(!--count && !isTimeout){
				clearTimeout(timeoutId)
				callback(success)
			}
		}
	}


	function onTimeout(){
		isTimeout = true;
		callback(false);
	}
}

var __id = 0
function getId(){
	return ++id;
}


module.exports = loadImage;