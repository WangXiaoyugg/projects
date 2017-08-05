'use strict';

var DEFAULT_INTERVAL = 1000/60;

var STATE_INITAL = 0

var STATE_START = 1

var STATE_STOP = 2;

/**
 * requestAnimationFrame 简称 raf
 */

var requestAnimationFrame =(function(){
	return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			function (callback){
				return window.setTimeout(callback,callback.interval || DEFAULT_INTERVAL)
			}
})()

var cancelAnimationFrame = (function(){
	return window.cancelAnimationFrame ||
			window.webkitCancelAnimationFrame ||
			window.mozCancelAnimationFrame ||
			window.oCancelAnimationFrame ||
			function(id){
				return window.clearTimeout(id);
			}
})()


/**
 *Timeline 时间轴类
 *@constructor
 */
function Timeline(){
	this.animationHandler = 0;
	this.state = STATE_INITAL;
}

/**
 *时间轴上每一次回调执行的函数
 *@param time 从动画开始到当前执行的时间
 */
Timeline.prototype.onenterframe = function(time){

}

/**
 *动画开始
 *@param interval 每一次回调的间隔时间
 */
Timeline.prototype.start = function(interval){
	if(this.state === STATE_START){
		return;
	}

	this.state = STATE_START;

	this.interval = interval || DEFAULT_INTERVAL;
	startTimeline(this,+new Date());
}

/**
 *动画停止
 */
Timeline.prototype.stop = function(){
	if(this.state !== STATE_START){
		return ;
	}
	this.state = STATE_STOP;

	//动画开始过，记录动画从开始到现在所经历过的时间
	if(this.startTime){
		this.dur = +new Date() - this.startTime
	}

	cancelAnimationFrame(this.animationHandler)
}

/**
 *动画重新开始
 */
Timeline.prototype.restart = function(){
	if(this.state === STATE_START){
		return;
	}

	if(!this.dur || !this.interval){
		return;
	}

	this.state = STATE_START

	//无缝链接动画
	startTimeline(this,+new Date() - this.dur);
}

/**
 *时间轴动画启动函数
 *@param timeline 时间轴实例
 *@param startTime 动画开始时间轴
 */

Timeline.prototype.startTimeline = function(timeline,startTime){

	timeline.startTime = startTime;
	nextTick.interval = timeline.interval;

	//记录上一次回调的时间轴
	var lastTick = +new Date()
	nextTick()

	//定义每一帧的执行的函数
	function nextTick(){
		var now = +new Date()

		timeline.animationHandler = requestAnimationFrame(nextTick);
		
		//如果当前时间与上一次回调的时间戳大于设置的时间间隔
		//表示这一次可以执行的回调函数
		if(now - lastTick >= timeline.interval){
			timeline.onenterframe(now -startTime)
			lastTick = now;
		}
	}
}

module.exports = Timeline;
