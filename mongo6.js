//Run it with hello1.html: Localhost:3000/anyname?getvar1=someval&getvar2=someval

var express = require('express'),
    app = express(),//Web framework to handle routing requests
    cons = require('consolidate'); // Templating library adapter for Express

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(app.router);

function errorHandler(err,req,res, next){
	console.log(err.message);
	console.log(err.stack);
	res.status(500);
	res.render('error_template',{error: err});
}

app.use(errorHandler);
app.get('/:name',function(req,res,next){
	var name = req.params.name;
	var getvar1 = req.query.getvar1;
	var getvar2 = req.query.getvar2;
	res.render('hello1',{name:name, getvar1:getvar1, getvar2:getvar2});
});

app.listen(3000);
