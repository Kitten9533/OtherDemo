function test(){
	for(var i=0;i<10;i++){
		(function(j){
			setTimeout(function(){
				console.log(new Date());
			},2000*i);
		})(i);
	}
}
test();
