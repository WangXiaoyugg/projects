# 表单技巧
1. 避免多次提交

主要就是js 控制元素按钮的submit行为
添加类控制，触发disable,延迟执行

2. 用户还能输入多少文本

3. 全选和多选
refChecked=this.checked
box.checked =refchecked;
4. 验证输入
是否为空加样式，自动focus
5. 特定输入特定帮助
reg.test(),str.match();
```
var FIELD_PATERNS = {
	integer:/^\d+$/,
	number:/^\d+(?:\.\d+)?$/,
	email:/^[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,6}$/i
}
function checkField(field){
	var value = $(field).toString().strip();
	for(va pattern in FIELD_PATERNS){
		if(!field.hasClassName(pattern)) continue;
		if(!FIELD_PATERNS[pattern].test(value)) return false;
	}
	return true;
}
```


6. 其他类型输入和自动完成
focus  show tooltip
blur hide tooltip

自动完成
- 数据量小，货币单位，某个品牌的型号，预先放到js里
- 数据过大，使用ajax做好查询频率

7. 一次上传多个文件
- 原来只能上传单文件，而且不知道大小和过滤，base64编码文件体积增大
 1/3;
- 每当文件上传控件的值得到设置，就把这个控件复制一份，把原始体控件移到那
个“队列”中隐藏起来，并重置控件复制体的值，使其看起来还是空的。
- 服务端必须再次校验所有内容
