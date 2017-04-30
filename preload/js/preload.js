//图片预加载
;(function($){

	function Preload(imgs,options){
		this.imgs = (typeof imgs === 'string') ? [imgs]:imgs;
		this.opts = $.extend({},Preload.DEFAULTS,options);

		if(this.opts.order === 'ordered'){
			this._ordered()
		}else{
			this._unordered();
		}
	}

	Preload.DEFAULTS = {
		order:'unordered', //无序预加载
		each:null, //每张图片加载完成后执行
		all: null, //所有图片加载完成后执行

	}
	//有序加载
	Preload.prototype._ordered = function(){
		var opts = this.opts,
			imgs = this.imgs,
			len = imgs.length,
			count = 0;

		load();

		//有序预加载
		function load(){
			var imgObj = new Image();
			
			$(imgObj).on('load error',function(){
				opts.each && opts.each(count);

				if(count >= len){
					opts.all && opts.all();
				}else{
					load();
				}
				count++;

			})
			imgObj.src = imgs[count]
		}
	}

	//无序加载
	Preload.prototype._unordered = function(){
		var imgs = this.imgs,
			opts = this.opts,
			count = 0,
			len = imgs.length;

		$.each(imgs,function(i,src){
			if(typeof src != 'string'){
				return false;
			}

			var imgObj = new Image();

			$(imgObj).on('load error',function(){
					opts.each && opts.each(count);

					if(count >=len-1){
						opts.all && opts.all()
					}
					count++;
			})
			imgObj.src = src;
		})
	}
	// $.fn.extend => $('#img').preload()
	// $.extend => $.preload();
	$.extend({
		preload :function(imgs,opts){
			new Preload(imgs,opts)
		}
	})

})(jQuery)