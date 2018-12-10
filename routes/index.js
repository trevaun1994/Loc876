var express = require('express');
var router = express.Router();
const request = require('request');


var categories = [];

/**
**Get Product Categories
**/
function getProductCategories() {
    request('http://localhost:9000/product/getallcategories', {json: true}, (err, res, body) => {
        if(err) {
            return console.log(err);
        }
        body.forEach(function(index){
            console.log(index)
            let category = {name:index,symbol:"$", currency:"JMD", cost:"150", imageURL:'img/bg-img/10.jpg'};
            categories.push(category);
        });
    });
}

getProductCategories();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Loc8', products: categories });
});

module.exports = router;