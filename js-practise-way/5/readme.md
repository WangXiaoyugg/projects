# 服务端技术

1.cookie
在客户端直接操作cookie。 
cookie持久化可以免去用户每次页面刷新后做重复设
置，比如重设表单提交和地址重定向之后的分页大小和被激活的选项卡（在选项卡控件中），以
及恢复树形控件中的展开/折叠结点状态
- 它们位于客户端，因此处于相当暴露的环境中
- 容量有限4kb
- 可能不会使用cookie

```
$.cookies.set(key,value[,options])
$.cookies.get(key)
$.cookies.filter(nameRegExp)
$.cookies.del(key[,options])
$.cookies.test()
```
2.ajax
域名相同才能请求ajax
$.ajax([settings])
3.json
数据交换格式，
轻便
不依赖任何客户端语言解释和处理
```
手动解码JSON串
var data = eval('('+jsonString+')')

var data = data.parse(jsonString)
JSON.stringify(obj)
$.parseJSON(SomeJsonString);
```
4.json-p
它的传输主要依
赖于动态生成的<script>标签，这会产生一个有趣的副作用
 传输的数据可以不限于同一来源
 你得到一份JavaScript代码，这份代码把正常的JSON字面量作为参数
传给你提供的回调函数。这意味着回调函数预先由你的代码提供并且设为全局可访问
JSON-P实质上是在你的页面上运
行第三方提供的JavaScript
我必须指出，我们用的传输方式（即动态 <script> 标签）是把JSON-P限制为GET请求，
因此也就把加载量限制到了大约4KB（传统的GET限制）
```
document.documentElement.firstChild.appendChild(
 new Element('script',{
 	type:'text/javascript',
 	src:this.href +'&r='+Math.random()
 })
)
$.getJSON(url,[,data,callback])
```
跨来源资源共享 （ Cross-Origin Resource Sharing， CORS）
因为CSS文件不受同源策略的限制
你也可以利用一个“ Web的bug”，即利用普通的<img>标签（把你的脚本代码放在里
面）在动态选中的图片上进行服务器端调用。不过问题在于，你只能基于图片的长和宽这两个数
来传递响应信息，而且要在图片载入之后检测出原来的图片大小是相当麻烦的