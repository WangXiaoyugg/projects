# ajax的基础
- 手动编写ajax,不依赖第三方库
- 跨域的几种实现方式

## 实现方式
XMLHttpRequest
状态码说明
跨域

ajax
```
//注IE使用activeXObject()
0 - 为初始化
1 - 已调用
2 - send 完成
3 - 解析响应
4 - 响应内容完成

var xhr = new XMLHttpRequest()
xhr.open('GET','/api',false)
xhr.onreadystatechange = function(){
	if(xhr.readyState == 4){
		if(xhr.status == 200){
			console.log(xhr.responseText)
		}
	}
}
xhr.send(null)

```
跨域 JSONP服务器端设置http header

- 浏览器有同源策略，不允许ajax访问其他域的接口
- 跨域条件：协议、域名、端口，有一个不同就算跨域

可跨域的三个标签
- <img src='xxx'>
图片仅百度可用，针对其他域名的防盗链处理，知乎也做了类似的处理
博客园没做防盗链处理
- <link href = 'xxx'>
- <script src='xxx'>

标签的使用场景
- img 用于打点统计、统计网站可能是其他域
- link script 使用cdn,cdn可以是其他域
- script 可以用于跨域请求

跨域的注意事项
- 所有跨域请求都必须信息提供方方允许
- 如果未经许可即可获取，是浏览器的同源策略出现了问题

JSONP 实现原理

- 加载 http://codeing.net/index.html
- 服务器不一定真实存在index.html 文件
- 服务器可以根据请求，动态生成一个文件返回
- <script src = 'http://coding.net/index.js'>
- 返回内容格式 callback({x:100,y:200})(可动态生成)

```
window.callback = function(data){
	console.log(data)
}

<script src='http://coding.net/index.js'></script>
```

服务器端设置http header
- 需要服务端来做
response.setHeader('Access-control-Origin','http://a.com,http://b.com')
response.setHeader('Access-control-Allow-Headers','X-Requested-With')
