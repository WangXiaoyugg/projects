#常用的组件库

## 简单的轮播插件

- [示例效果](https://wangxiaoyugg.github.io/projects/components/carousel.html)

### 使用方法

1.写成页面结构

```
<div class="carousel">
	<ul class="pic-ct clear">
		<li class="pic"><img src="./img/1.jpg"></li>
		<li class="pic"><img src="./img/2.jpg"></li>
		<li class="pic"><img src="./img/3.jpg"></li>
		<li class="pic"><img src="./img/4.jpg"></li>
	</ul>
	<ul class="arrow-ct">
		<li class="left-arrow arrow"><</li>
		<li class="right-arrow arrow">></li>
	</ul>
	<ul class="page-ct">
		<li class="active"></li>
		<li></li>
		<li></li>
		<li></li>
	</ul>
</div>
```

2.引用样式
`<link rel="stylesheet" href="./css/carousel.css">`

3.引用js文件
```
<script type="text/javascript" src="./libs/jquery.js"></script>
<script type="text/javascript" src="./js/carousel.js"></script>
```
4.调用方法
carousel.use($('.curousel'));

## 简单的tab组件

- [示例效果](https://wangxiaoyugg.github.io/projects/components/tab.html)

### 使用方法

1.页面结构

```
	<div class="tab"> 
		<ul class="tab-header clearfix">
			<li class="active">选项1</li> 
			<li>选项2</li>
			<li>选项3</li>
		</ul>
		<ul class="tab-container">
			<li class="active">内容1
				<ul>
					<li></li>
				</ul>
			</li>
			<li>内容2</li>
			<li>内容3</li>
		</ul>
	</div>
```

2.引用样式
`<link rel="stylesheet" href="./css/tab.css">`

3.引用js文件
```
<script type="text/javascript" src="./js/tab.js"></script>
```


4.调用方法

`var tab1 = new Tab(document.querySelectorAll('.tab')[0])`

## 简单的曝光组件

- [示例效果](https://wangxiaoyugg.github.io/projects/components/lazy.html)

### 使用方法

1.页面结构

```
	<ul class="container">
		<li><a href="javascript:;"><img src="./img/blank.jpg" data-src="./img/1.jpg"></a></li>
		<li><a href="javascript:;"><img src="./img/blank.jpg" data-src="./img/2.jpg"></a></li>
		<li><a href="javascript:;"><img src="./img/blank.jpg" data-src="./img/3.jpg"></a></li>
		<li><a href="javascript:;"><img src="./img/blank.jpg" data-src="./img/4.jpg"></a></li>
		<li><a href="javascript:;"><img src="./img/blank.jpg" data-src="./img/5.jpg"></a></li>
		<li><a href="javascript:;"><img src="./img/blank.jpg" data-src="./img/6.jpg"></a></li>
		<li><a href="javascript:;"><img src="./img/blank.jpg" data-src="./img/1.jpg"></a></li>
		<li><a href="javascript:;"><img src="./img/blank.jpg" data-src="./img/2.jpg"></a></li>
	</ul>
```

2.引用样式
`<link rel="stylesheet" href="./css/lazy.css">`

3.引用js文件
```
<script type="text/javascript" src="./libs/jquery.js"></script>
<script type="text/javascript" src="./js/lazy.js"></script>
```

4.调用方法

```
Lazy.init($('.container img'), function($node){
  		showImg($node);
	})
```

## 模态框封装

- [示例效果](https://wangxiaoyugg.github.io/projects/components/modal.html)

## 拖拽对话框封装
- [示例效果](https://wangxiaoyugg.github.io/projects/components/dialog.html)
