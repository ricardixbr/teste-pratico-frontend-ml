'use strict';

const express = require('express');
const app = express();
const router = express.Router();
const Request = require('request');

router.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});


router.route('/')

  // GET http://localhost:3001/api
  .get(function(req, res) {
    res.send({'Mensagem': 'API para o Teste Prático de Frontend'});
  });

// routes /api/items?q=:query
// ----------------------------------------------------
router.route('/items')

  // GET http://localhost:3001/api/items?q=:query
  .get(function(req, res) {

    const query = req.param('q');

    Request.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`, function (error, response, body) {

      const result = JSON.parse(body);
      const products = result.results;
      let productsFinal = [];
      let mainObject = 
      { 
        'author' : {
          'name' : 'Ricardo',
          'lastname' : 'Reis'
        },
        categories : [],
        items : []
      };


      let wrapperCategories = result.available_filters.filter(el => {
        return el.id == 'category';
      });

      wrapperCategories[0].values.forEach(el => {
        mainObject.categories.push(el.name);
      });

      let limit = 0;
      products.forEach(el => {
        limit++
        if ( limit < 5 ) {
          let item = {};
          let price = {};

          price.currency = el.currency_id;
          price.amount = el.price;
          price.decimals = "00";

          item.id = el.id;
          item.title = el.title;
          item.price = price;
          item.picture = el.thumbnail;
          item.condition = el.condition;
          item.free_shipping = el.shipping.free_shipping;
          
          mainObject.items.push(item);
        }
      });


      if (error)
        res.send(error);
      res.json(mainObject);

    });
  })

// routes /api/items/:id
// ----------------------------------------------------
router.route('/items/:id')

  // GET http://localhost:3001/api/items/:id
  .get(function(req, res) {

    const productID = req.params.id;
    let product = 
    { 
      'author' : {
        'name' : 'Ricardo',
        'lastname' : 'Reis'
      },
      item : {}
    };
    let result = {};
    let description = {};

    Request.get(`https://api.mercadolibre.com/items/${productID}`, function (error, response, body) {
      result = JSON.parse(body);

      let item = {};
      let price = {};
      let description = {};

      price.currency = result.currency_id;
      price.amount = result.price;
      price.decimals = "00";

      item.id= result.id;
      item.title= result.title;
      item.price= price;
      item.picture = result.pictures[0].url;
      item.condition = result.condition;
      item.free_shipping = result.shipping.free_shipping;
      item.sold_quantity = result.sold_quantity;

      Request.get(`https://api.mercadolibre.com/items/${productID}/description`, function (error, response, body) {
        description = JSON.parse(body);
        item.description = description.plain_text;
        product.item = item;
        res.send(product);
      })
      
    })
  })

module.exports = router;