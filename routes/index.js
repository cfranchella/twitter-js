const express = require('express');
const router = express.Router();
const path = require('path');

// Se puede usar solo una linea: const router = require('express').Router();
const tweetBank = require('../tweetBank');
router.use(express.static('public'))
router.get('/', function (req, res) {
    console.log('llega');
    let tweets = tweetBank.list();
    res.render('index', { tweets: tweets });
});
router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find(function(e){
	return e.name === name  		
  });
  res.render( 'index', { tweets: list });
});
router.get('/tweets/:id', function(req, res) {
  var id = req.params.id;
  var list = tweetBank.find(function(e){
	return e.id == id  		
  });
  res.render( 'index', { tweets: list });
});
module.exports = router;