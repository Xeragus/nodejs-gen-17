var express = require('express');
var router = express.Router();

/** Komandi koristeni za nodemon:
 * 1. npm i nodemon
 * 2. vo package.json smenete start skripta da povikuva so nodemon namesto so node
 */

router.get('/', function(req, res) {
  res.render('index', { title: 'Balkan Express', subtitle: 'Hehehe' });
});

module.exports = router;
