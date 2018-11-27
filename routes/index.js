var express = require('express');
var router = express.Router();
productA = {name:"Patty",symbol:"$", currency:"JMD", cost:"432", imageURL:'img/bg-img/10.jpg'};
productB = {name:"Patty",symbol:"$", currency:"JMD", cost:"432", imageURL:'img/bg-img/10.jpg'};
var products = [];
products.push(productA);
products.push(productB);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Loc8', products: products });
});

module.exports = router;