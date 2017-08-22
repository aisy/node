var osmosis = require('osmosis');
var jsonfile = require('jsonfile');

var link1  = 'https://m.bnizona.com/index.php/category/index/promo';
var link2 = 'https://m.bnizona.com/promo/index/16';

var title=[];
var json=[];

// osmosis(link1)
//     .find('.menu li')
//     .set({
//         Category: 'a',
//     })
//     .data(function(data){
//         console.log(data)
//         title.push(data)
//     })
//     // .log(console.log)
//     // .debug(console.log)
//     // .error(console.log)
//     .done(function(){
//         var file= 'solution.json';
//         jsonfile.writeFile(file, json);
//     });

osmosis(link2)
    .find('.list2 li')
    .set(
        {
         "merchan-name"   : ".merchant-name",
         "imageurl"       : "img@src",
         "promo-title"    : ".promo-title",
         "valid-until"    : ".valid-until"   
        })
    .data(function(data){
            console.log(data);
            json.push(data);
        }
    )
    .log(console.log)
    .debug(console.log)
    .error(console.log)
    .done(function(){
        var file= 'solution.json';
        jsonfile.writeFile(file, json);
    });