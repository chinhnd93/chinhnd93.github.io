
var column_type = ['todo', 'doing', 'done'];

var DB={
	getData: function(){
		if(typeof(Storage)!=="undefined"){
			var data;
			try{
				data=JSON.parse(localStorage.getItem("list"))||{};
			} catch(error){
				data={};
			}
			return data;
		} else{
    	alert("K support");
    	return {};
		}
	},
	setData: function(data){
		localStorage.setItem("list", JSON.stringify(data));
	}
};

var list = DB.getData();
var app={
	newJob: function(even, type, input){
		var jobName=$(input).val();
		var event = window.event || even;
		if(event.keyCode==13){
			if(jobName.trim()!=''){
				//Update DOM
				if(!list[type]) list[type]=[];
				list[type].push(jobName);
				
				this.addJobToList(type, jobName);
				//Reset input
				$(input).val('');
				DB.setData(list);
			}
		}
	},
	addJobToList: function(type, jobName){
		var item='<div href="#!" class="collection-item">'+jobName+'<i class="material-icons right" onclick="app.deleteJobToList(this)">delete</i></div>';
		$('#'+type).append(item);
	},
	deleteJobToList: function(span){
			var columType=$(span).parent().parent().attr('id');
			var itemPosition=$("#"+columType+" .material-icons").index(span);
			$('#btn-delete').off('click');
			$('.modal').css('display','block');
			$('#btn-delete').on('click',function(){			
				$('.modal').css('display','none');
				list[columType].splice(itemPosition,1);
				DB.setData(list);
				$(span).parent().remove();
			});
			$('#btn-flat').on('click',function(){				
				$('.modal').css('display','none');
				$('#btn-delete').off('click');
			});
		}
};



$( function() {
			column_type.forEach(function(type){
				var columntype = list[type] || [];
				columntype.forEach(function(jobName){
					app.addJobToList(type, jobName);
				});
			})
	    $('.sorted-list').sortable({
	      connectWith: '.sorted-list',
	      placeholder: 'ui-state-highlight'
	      // start: function(event, ui){
	      // 	$(ui.item[0]).addClass('dragging');
	      // },
	      // stop: function(event, ui){
	      // 	$(ui.item[0]).removeClass('dragging');
	      // }
	    });
	  });