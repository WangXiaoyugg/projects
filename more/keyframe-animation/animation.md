# 动画
- 是由一张一张的图片连续运动构成了，
- 一秒钟 60（张图片）帧 动画流畅

## 常见的帧动画方式
- gif
- CSS3 animation 
- Javascript

1. 前两者不能灵活控制动画的暂停和播放
2. 前两者不能捕捉动画完成时的事件
3. 不能对动画完成更多的扩展

# js实现帧动画的原理
1. 如果多张帧图片，用一个image标签去承载图片，
定时改变image的src属性
2. 把所有动画关键帧绘制一张图片里，把图片作为
元素的background-image,定时改变元素的background-
position 属性

# 如何设计通用的帧动画库
- 需求分析
1. 支持图片预加载
2. 支持2种动画播放方式，以及自定义每帧动画
3. 支持单组动画和循环次数 可支持无限循环
4. 支持一组动画完成，进行下一组动画
5. 支持每个动画完成后由等待时间
6. 支持动画的暂停和播放
7. 支持动画完成后支持回调函数

- 编程接口
1. loadImage(imglist)
2. changePosition(elem,positions,imgUrl)
3. changeSrc(elem,imglist)
4. enterFrame(callback)
5. repeat(times)
6. repeatForever()
7. wait(time)
8. then(callback)
9. start(interval)
10. pause()
11. restart()
12. dispose()

- 调用方式
1. 支持链式调用，期望动词的方式描述接口

- 代码设计
1. 任务链
a. 同步执行完毕
b. 异步定时执行完毕的(通过计时器和raf)
2. 记录当前任务链的索引
3. 任务链执行完毕，调用next方法，执行下个任务链，同时更新任务链索引值
