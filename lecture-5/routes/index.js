var express = require('express');
var router = express.Router();
const indexController = require('../controllers/index');

/** Komandi koristeni za nodemon:
 * 1. npm i nodemon
 * 2. vo package.json smenete start skripta da povikuva so nodemon namesto so node
 */

router.get('/', indexController.index)
      .get('/hehe', indexController.hehe);

module.exports = router;
