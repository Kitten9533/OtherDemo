var http = require('http'),
	url = require('url'),
	fs = require('fs'),
	app;


app = http.createServer(function(req,res){
	var path = url.parse(req.url).pathname;
	switch (path){
		case '/':
			res.writeHead(200,{'Content-Type':'text/html'});
			res.write('<a href="/index.html"></a>');
			res.end();
			break;
		case '/index':
			fs.readFile(__dirname + path,function(err,data){
				if(err){
					return send404();
				}
			});
			res.writeHead(200, {'Content-Type': path == 'json.js' ? 'text/javascript' : 'text/html'})
			res.end();
			break;
		defalut:
			send404();
	}
})

function send404(){
	res.writeHead(404);
	res.write('404');
	res.end();
}

app.listen(3000);
console.log('listening on port 3000');

var io = require('socket.io').listen(app);
io.on('connection',function(socket){
	console.log(socket.id + ',connected!');
	socket.join('group');
	console.log('join group');
	var count = io.sockets.adapter.rooms['group'].length;
	console.log('当前连接人数：'+count);
	console.log(JSON.stringify(io.sockets.adapter.rooms['group']));
	socket.on('message',function(data){
		console.log('socket:' + JSON.stringify(data));
	});
	socket.on('disconnect',function(){
		count--;
		console.log('disconnect');
		console.log('当前连接人数：'+count);
	});
});