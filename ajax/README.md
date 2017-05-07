# AJAX Async Javascript And XML
## 历史
- 微软发明了 ActiveX
- 火狐模仿: window.XMLHttpRequest
- 2005 Gmail出现 开始流行AJAX

# 请求
- 请求头,首部,换行,主体

1. 浏览器可以发请求的方法
  浏览器是地址栏输入网址 - 必须替换当前页面
  link css -  只能请求css
  img src - 只能请求图片
  script src - 只能请求js
  form action 当用户提交时  - 页面会刷新,获取新的html,json,只能把当前页面干掉,   
                              才能更新内容 

2. server.js 里的请求后缀无用
3. 百度的css,js可以引用,ajax不能跨域
4. 跨域由浏览器设置的,保护个人隐私  

# json 配合ajax传输数据 
- 2001 道格拉斯发明的json
- 最开始Java写后台XML传输数据
- json www.json.org 
- "","a",
- 对象,数组,无函数
- ["a","b"]
- json

## 阅读说明
- server.js 模拟后台服务器
- cd ajax && node server.js
- open browser input address : localhost:8888