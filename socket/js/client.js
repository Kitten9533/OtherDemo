(function(){
	var w = window,
		d = document;

	w.Chat={
		id:null,
		el:null,
		socket:null,
		init:function(elementid){
			id = elementid;
			el = d.getElementById(elementid);
			el.addEventListener('keypress',function(e){
				var e = e || event;
				if(e.keyCode == 13){
					//send
					Chat.send();
				}
			});
			socket = io.connect('ws://127.0.0.1:3000');
		},
		alert:function(){
			console.log(id);
			console.log(el.value);
		},
		send:function(){
			console.log('send'+el.value);
			socket.emit('message',{data:el.value});
			el.value = '';
		}
	}
})();