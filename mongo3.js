/* Hello World in Express */

var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.send("Hello World");
});

app.get('*',function(req,res){
	res.send('I am the saviour');
});

app.listen('8000');

console.log("Online!");
