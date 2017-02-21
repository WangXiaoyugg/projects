function Calander($ct){
			this.init($ct);
			this.render();
			this.setDate();
			this.bindEvent();
		}

		Calander.prototype.init = function ($ct){
			this.$ct = $ct;
			this.date = new Date();
			this.watchDate = new Date();
		}

		Calander.prototype.render=function(){
			var tpl = '<div class="date-header">';
			tpl+= '<span class="prev">Prev</span>';
			tpl+= '<span class="date-title"></span>';
			tpl+='<span class="next">Next</span>';
			tpl+='</div>';
			tpl+='<div class="date-body">';
			tpl+='<table class="date-panel">';
			tpl+='<thead> ';
			tpl+='<tr>';
			tpl+='<th>Sun</th>';
			tpl+='<th>Mon</th>';
			tpl+='<th>Tue</th> ';
			tpl+='<th>Wed</th>';
			tpl+='<th>Thu</th> ';
			tpl+='<th>Fri</th>';
			tpl+='<th>Sat</th> ';
			tpl+='</tr>';
			tpl+='</thead> ';
			tpl+='<tbody>  ';
			tpl+='</tbody>  ';
			tpl+='</table> ';
			tpl+='</div>   ';
			tpl+='<div class="date-footer">';
			tpl+='</div>';
			this.$calendar = $(tpl);
			this.$ct.append(this.$calendar);
			var month = this.date.getMonth();
			var footerContent = this.toFix(month)+" "+this.date.getDate()+" "+this.date.getFullYear();
			this.$ct.find('.date-footer').text(footerContent);
		}

		// 设置日期
		Calander.prototype.setDate=function (){
			this.$calendar.find('tbody').html('');
			var firstDay = this.getFirstDay(this.watchDate),
				lastDay = this.getLastDay(this.watchDate);

		   var dateArr = [];
		   for(var i= firstDay.getDay();i>0;i--){
		   		var d = new Date(firstDay.getTime() -  i*24*60*60*1000);
		   		dateArr.push({
		   			type:'pre',
		   			date:d
		   		})
		   }

		   for(var j = 0;j<lastDay.getDate()- firstDay.getDate()+1;j++){
		   	  var d = new Date(firstDay.getTime() + j*24*60*60*1000);
		   	  dateArr.push({
		   	  	type:"cur",
		   	  	date:d
		   	  })
		   }

		   for(var k=1 ; k<7-lastDay.getDay();k++){
		   	var d = new Date(lastDay.getTime()+k*24*60*60*1000);
		   	dateArr.push({
		   		type:'next',
		   		date:d
		   		})
		   }
		   this.$calendar.find('.date-title').text(this.toFix(this.watchDate.getMonth())+" "+this.watchDate.getFullYear())
		   var tpl = '';
		   for(var i=0;i<dateArr.length;i++){
		   		if(i%7 === 0){
		   			tpl = '<tr>'+tpl;
		   		}
		   		tpl += '<td class="';
		   		if(dateArr[i].type === 'pre'){
		   			tpl+='pre-month';
		   		}else if(dateArr[i].type ==='cur'){
		   			tpl+='cur-month';
		   		}else {
		   			tpl+='next-month';
		   		}
		   		if(this.date === dateArr[i].date){
		   			tpl+='cur-date'
		   		}
		   		tpl+='">';
		   		tpl += dateArr[i].date.getDate()+'</td>'
			   	if(i%7 === 6){
			   	tpl = tpl+'</tr>'
			   }
		   }

		   this.$calendar.find('tbody').html(tpl);

		}

		Calander.prototype.bindEvent = function (){
			var that = this;

			this.$calendar.find('.prev').on('click',function(){
				console.log('Bind prev');
				console.log(this);
				that.watchDate = that.getPerMonth(that.watchDate);
				that.setDate();
				console.log('bind prev end');
			})

			this.$calendar.find('.next').on('click',function(){
				that.watchDate = that.getNextMonth(that.watchDate);
				that.setDate();
			})
		}

		Calander.prototype.getFirstDay = function (date) {
			var year = date.getFullYear();
		    var month = date.getMonth();
		    return new Date(year,month,1);
		}
		Calander.prototype.getLastDay = function (date){
			var year = date.getFullYear();
			var month = date.getMonth();
			month++;
			if(month>11){
				month = 0;
				year++
			}
			var newDate = new Date(year,month,1);
			return new Date(newDate.getTime() - 24*60*60*1000);
		}

		Calander.prototype.getPerMonth = function(date){
			var year = date.getFullYear(),
			    month = date.getMonth();
			    month--;
			if(month<0){
				month = 11;
				year--;
			}
			return new Date(year,month,1);
		}

		Calander.prototype.getNextMonth = function (date){
			var year = date.getFullYear();
			    month = date.getMonth();
			    month++;
			    if(month>11){
			    	month = 0;
			    	year++
			    }
			  return new Date(year,month,1);
		}

		Calander.prototype.toFix = function (month){
			var dict = ['January','Febubary','March','April','May','June','July','August','September','October','November','December'];
			var outer = '';
			dict.map(function(ele,idx,arr){
				if(month === idx){
					outer = ele;
				}
			})
			return outer
		}

		$.fn.calendar = function(){
			this.each(function(){
				new Calander($(this));
			})
		}
