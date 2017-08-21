
// load module
var express = require('express');
var bodyParser = require('body-parser');

//  initial apps
var app = express();

// use bodyparser to read json
app.use(bodyParser.json());

// initial link
app.get('/',function(req,res){
    res.send('get request');
});

// initial link
app.get('/object', function(req,res){
    var obj={nama:'AisyMr',karir:'Software Engineer'};
	res.send(obj);
});

app.listen(3000, function(){
    console.log('listening on port 3000');
});