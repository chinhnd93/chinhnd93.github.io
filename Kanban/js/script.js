var app={
	newJob: function(even, type, input){
		var jobName=$(input).val();
		var event = window.event || even;
		if(event.keyCode==13){
			if(jobName.trim()!=''){
				//Update DOM
				this.addJobToList(type, jobName)
				//Reset input
				$(input).val('');
			}
		}
	},
	addJobToList: function(type, jobName){
		var item='<div href="#!" class="collection-item">'+jobName+'<i class="material-icons right" onclick="app.deleteJobToList(this)">delete</i></div>';
		$('#'+type).append(item);
	},
	deleteJobToList: function(span){
			console.log("abc");
			$('.modal').css('display','block');
			$('#btn-delete').on('click',function(){				
				$('.modal').css('display','none');
				$(span).parent().remove();
			});
			$('#btn-flat').on('click',function(){				
				$('.modal').css('display','none');
			});
		}
};



$( function() {
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