
// load module
var express     = require('express');
var bodyParser  = require('body-parser');
var http        = require('http');
var fs          = require('fs');

//  initial apps
var app = express();


// use bodyparser to read json
app.use(bodyParser.json());

// initial link
app.get('/',function(req,res){
    // var obj={nama:'AisyMr',karir:'Software Engineer'};
    var obj = JSON.parse(fs.readFileSync('solution.json','utf8'));
	res.send(obj);
});

// set port
app.listen(8000, function(){
    console.log('listening on port 8000');
});