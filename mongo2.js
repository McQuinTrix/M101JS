var mongo = require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017/test',function(err,db){
	if(err) throw err;
	db.collection('coll').findOne({},function(err,data){
		if(err) throw err;
		console.log(data);
		db.close();
	});
});
