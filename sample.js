// load module
let axios       = require('axios'); //load client web
let cheerio     = require('cheerio'); //library to scrap web
let jsonfile    = require('jsonfile'); //read or create json file

// link scrapper
let base_url = 'https://m.bnizona.com/index.php/category/index/promo';

// load url and do magic here
axios.get(base_url).then( (response) => {

  let $ = cheerio.load(response.data); // get data web 
  let json = []; // variable to set json  

  // read element 
  $('li', '.menu').each( (i, elm) => {

    // place to json
    json.push( {
      Promo : $(elm).children().text()
    });

  });
  return(json);
})
.then ( (json) => {
  //show to console   
  console.log(json);

  // write json to solution.json 
  var file= 'solution.json'
  jsonfile.writeFile(file, json)
});