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
module.exports = router;