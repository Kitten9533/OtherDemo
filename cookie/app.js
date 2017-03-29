var express = require('express')
var cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())

app.get('/',function(req,res){
	console.log(req.cookies.isVisit)
	if(req.cookies.isVisit){
		req.cookies.isVisit++;
		res.send('<p>第'+req.cookies.isVisit+'次来到此页面</p>')
	}
	else{
		res.cookie('isVisit',1,{maxAge:60*1000*30})
		res.send('welcome')
		console.log('Cookie:'+JSON.stringify(req.cookies))
	}
})

app.listen(3000)