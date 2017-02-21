	function Tab(ct){
		this.ct = ct;
		this.init();
		this.bind();
	}

	Tab.prototype.init = function (){
		this.tabList = this.ct.querySelectorAll('.tab-header>li');
		this.tabPanel = this.ct.querySelectorAll('.tab-container>li');
	}
	Tab.prototype.bind = function(){
		var that = this;
		this.tabList.forEach(function(tabLi){
			tabLi.addEventListener('click',function(e){
				var target = e.target;
				var index = [].indexOf.call(that.tabList,target);
				that.tabList.forEach(function(item){
					item.classList.remove('active');
				})
				target.classList.add('active');
				that.tabPanel.forEach(function(panel){
					panel.classList.remove('active');
				})
				that.tabPanel[index].classList.add('active');
			})
		})
	}
	var tab1 = new Tab(document.querySelectorAll('.tab')[0]);