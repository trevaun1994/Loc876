var express = require('express');
var router = express.Router();

/**
**Get Product Categories
**/

/*function getProductCategories(){
    //Perform ajax call
    jQuery.post( {}, function (result) {
        if (result.success === 'true'){
            saved = true;
        }
    },'JSON');
}*/

productA = {name:"Grocery",symbol:"$", currency:"JMD", cost:"150", imageURL:'img/bg-img/10.jpg'};
productB = {name:"Electronics",symbol:"$", currency:"JMD", cost:"165", imageURL:'img/bg-img/10.jpg'};
productC = {name:"Services",symbol:"$", currency:"JMD", cost:"165", imageURL:'img/bg-img/10.jpg'};
productD = {name:"Cosmetics",symbol:"$", currency:"JMD", cost:"54", imageURL:'img/bg-img/10.jpg'};
var products = [];
products.push(productA);
products.push(productB);
products.push(productC);
products.push(productD);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Loc8', products: products });
});

module.exports = router;