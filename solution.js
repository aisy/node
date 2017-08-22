var osmosis = require('osmosis');
var jsonfile = require('jsonfile');

var link1  = 'https://m.bnizona.com/index.php/category/index/promo';
var link2 = 'https://m.bnizona.com/promo/index/16';

var title=[];
var json=[];

osmosis(link1)
    .find('.menu li')
    .set({"category" : 'a'})
    .follow('a@href')
    .find('.list2 li')
    .set({
        //  "merchant-name"   : ".merchant-name",
        //  "imageurl"       : "img@src",
        //  "promo-title"    : ".promo-title",
        //  "valid-until"    : ".valid-until" 
        "data":['.merchan-name']  
        })
    .data(function(data){
        console.log(data)
        title.push(data)
    })
    // .log(console.log)
    // .debug(console.log)
    // .error(console.log)
    .done(function(){
        var file= 'solution.json';
        jsonfile.writeFile(file, title);
    });