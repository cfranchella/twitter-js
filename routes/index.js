const express = require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser')

// Se puede usar solo una linea: const router = require('express').Router();
const tweetBank = require('../tweetBank');
router.use(express.static('public'));
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.get('/', function (req, res) {
    let tweets = tweetBank.list();
    res.render('index', { tweets: tweets, showForm: true });
});
router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find(function(e){
	return e.name === name  		
  });
  res.render( 'index', { tweets: list, showForm: true, nombre: name });
});
router.get('/tweets/:id', function(req, res) {
  var id = req.params.id;
  var list = tweetBank.find(function(e){
	return e.id == id  		
  });
  res.render( 'index', { tweets: list });
});
router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});
module.exports = router;