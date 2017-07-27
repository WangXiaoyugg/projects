# dom 结构增删改查

```
document.createElement()
document.querySelector()
document.body.appendChild('div')
document.body.removeChild('div')
div.parentElement
div.childNodes
div.childNodes[0].nodeType
div.childNodes[0].nodeName
```
1. DOM 是哪种操作结构
树
2. DOM 常用的api操作
增删改查
获取父节点，子节点
property ,Attribute
3. DOM 节点的Attribute 和 property
1. js对象 vs html 节点 

# BOM 操作

1. 如何检测浏览器类型
2. 拆解url的部分

- 知识点
1. navigator

```
var ua = navigator.userAgent
var isChorme = ua.indexOf('Chrome')

```

2. screen

screen.width
screen.height

3. location
location.href
location.protocal
location.pathname
location.search
location.hash

4. history
history.back()
history.forward()
