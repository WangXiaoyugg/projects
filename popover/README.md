# popover 组件

 ## 需求
 - 点击按钮打开弹出框，再点击关闭弹出框
 - 点击其他地方不能关闭弹出框
 - 难点css：保证按钮和弹出框对齐

 ## api设计思路
 - 第一种，控制力更强
 ```
 	let p = popover({
 		content: 'hello world'
 	})
 	xxx.onclick = function(){
 		p.toggle()
 	}
 	xxx.onmouseover = function(){
 		p.show()
 	}
 	xxx.onmouseleave = function(){
 		p.hide()
 	}
 ```
 - 第二种，更人性化

 ```
	popover({
		el:'#xxx',
		content:'hello world',
		trigger:'click',//mouseover,touch

	})
 ```

## html代码
```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <script src="https://code.jquery.com/jquery-2.1.4.js"></script>
  <title>JS Bin</title>
</head>
<body>
	<button id=xxx>点我</button>
</body>
</html>
```

## js代码编写
```
window.popover = function(options){
	let {el,content} = options;
	
	//套路包一下
	let $el = $(el);
	
	//写在外面省性能，占内存
	//let $popover = $('<div></div>')
	 
	let $popover;

	$el.onclick = function(){
		//写里面费性能，省内存
		if($popover){
			$popover.remove();//移除节点
			$popover = null ;//数组赋值为空，为了下次可以再点击
		}else{
			$popover = $('<div class='popover'></div>').text(content).insertAfter($el);
		}
		
	}

	return undefined;
}

popover({
		el:'#xxx',
		content:'hello world',
	})

```

## css代码要点
- 解决定位难题
- whitespace:nowrap
- padding的高度问题，margin-bottom无效，inline-block的bug
- css画三角形，大三角、小三角

