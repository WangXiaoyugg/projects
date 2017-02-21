	function Exporsure($target,callback){
		this.$target = $target;
		this.callback = callback;
		this.bind();
		this.check();
	}
	Exporsure.prototype.bind = function(){
		var  that = this;
		$(window).on('scroll',function(){
			that.check();
		})
	}
	Exporsure.prototype.check = function(){
		if(this.isShow(this.$target)){
			this.callback(this.$target);
		}
	}
	Exporsure.prototype.isShow = function(){
		var windowHeight = $(window).height();
		var scrollTop = $(window).scrollTop();
		var offsetTop = this.$target.offset().top;
		var elHeight = this.$target.height();
		if(windowHeight+scrollTop>offsetTop && offsetTop< scrollTop+elHeight){
			return true;
		}else{
			return false;
		}
	}
	function showImg($img){
		var imgUrl = $img.attr('data-src');
		$img.attr('src',imgUrl);
	}
	var Lazy = (function(){
		return {
			init:function($targets,callback){
				$targets.each(function(idx,target){
					new Exporsure($(target),callback)
				})
			}
		}
	})()
	Lazy.init($('.container img'), function($node){
  		showImg($node);
	});

	Lazy.init($('#hello'),function($node){
	 	$node.text($node.text()+'world')
	 })