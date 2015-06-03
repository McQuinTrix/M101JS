var express = require('express'),
    app = express(),
    cons = require('consolidate');

app.engine('html',cons.swig);
//swig template engine, consolidate is helping to integrate with express
app.set('view engine', 'html');
app.set('views', __dirname+"/views");

app.get('/',function(req,res){
	res.render('hello',{'name':'Harshal'});
});

app.get('*', function(req,res){
	res.send("404",404);
});

app.listen(8000);
