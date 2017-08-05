/*animation from imooc*/

var imgUrl = 'rabbit.png'

var positions = ['0 -854','-174 -852','-349 -852',
'-524 -852','-698 -852','-873 -848'];

var elem = document.getElementById('rabbit');

animation(elem,positions,imgUrl);


function animation(elem,positions,imgUrl){

	elem.style.backgroundImage = 'url('+ imgUrl +')';
	elem.style.backgroundRepeat = 'no-repeat';

	var index = 0;

	function run(){
		var pos = positions[index].split(' ');
		elem.style.backgroundPosition = pos[0]+'px '+ pos[1]+'px'

		index = index + 1;

		if(index > positions.length-1){
			index = 0;
		}

		setTimeout(run,60)
		
	}

	run()
}
