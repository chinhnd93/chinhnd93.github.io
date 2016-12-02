//Local Storage
var DataBase={
	getdata: function(){
		if(typeof(Storage)!=="undefined"){
			var data;
			try{
				data=JSON.parse(localStorage.getItem('keyword'))||[];
			}
			catch(error){
				data=[];
			}
			return data;
		}else{
			alert("Khong ho tro Local Storage");
		}
	},
	setdata: function(data){
		localStorage.setItem('keyword',JSON.stringify(data));
	}
}


var list=DataBase.getdata();

//Het phan Local Storage
function add(name){
	var item='<div class="wrap">'+'<div class="thumbnail">'+'<p>'+name+'</p>'+'<span class="glyphicon glyphicon-trash" onclick="del(this)">'+'</span>'+'</div>'+'<span class="stt">'+'</span>'+'<input type="text" onkeydown="capnhat_comment(event, this)" class="form-control" placeholder="Nhập bình luận của bạn">'+'</div>';
	$("#status").prepend(item);
}
function capnhat(e, input){
	var even=window.event||e;
	var val=$(input).val();
	if(even.keyCode===13&&val.trim()!==''){
		//add
		if(!list) list=[];
		list.push(val);
		DataBase.setdata(list);
		add(val);
		//gan lai o input
		$(input).val("");
	}
}
function add_comment(col,name){
	var item='<p class="p1">'+name+'<span style="float: right" class="glyphicon glyphicon-trash" onclick="del_comment(this)">'+'</span>'+'</p>';
	$(col).prev().append(item);
}
function capnhat_comment(e, input){
	var even=window.event||e;
	var val=$(input).val();
	if(even.keyCode===13&&val.trim()!==''){
		add_comment(input,val);

		$(input).val("");
	}
}
function del_comment(name){
	$(name).parent().remove();
}
function del(name){
	$("#modal").modal('show');
	$("#cancel").on('click',function(){
		$("#modal").modal('hide');
		$("#cancel").off('click');
	});
	$("#accept").off('click');
	$("#accept").on('click',function(){
		var item=$(name).parent().parent();
		var position=$(item).index();
		var n=list.length-1;
		list.splice(n-position,1);
		DataBase.setdata(list);
		$(name).parent().next().children().remove();
		$(name).parent().next().next().remove();
		$(name).parent().remove();
		$("#modal").modal('hide');
	});
}

$(function(){
	list.forEach(function(status){
		add(status);
	})
})