var str='<p>我是main.js里的代码</p>'
console.log(str);

var btn = document.getElementById('btn')
btn.onclick = function(){
	var httpRequest = new XMLHttpRequest() //实例XML对象
	httpRequest.open('GET','/data') //设置GET路径方法
	
	//onload调用方式
	// httpRequest.onload = function(){
	// 	// console.log(arguments[0].target.response)
	// 	var str = arguments[0].target.response
	// 	// var parts = str.split(',')
	// 	// var name = parts[0]
	// 	// var age = parts[1]
	// 	// console.log(name)
	// 	// console.log(age)
		
	// 	var obj = JSON.parse(str);
	// 	console.log(str)
	// 	console.log(obj)
	// 	console.log('加载完成')
	// }
	
	//onreadystatechange调用方式
	httpRequest.onreadystatechange = function(){
		console.log('readystate change ')
		console.log(httpRequest.readyState)
		if(httpRequest.readyState === XMLHttpRequest.DONE ){
			if(httpRequest.status === 200){
				console.log(httpRequest.status)
				console.log('load successful')
				console.log(httpRequest.responseText)
				var obj = JSON.parse(httpRequest.responseText)
				console.log(obj);
			}
		}
	}           
	                              
	httpRequest.send() //发请求
}