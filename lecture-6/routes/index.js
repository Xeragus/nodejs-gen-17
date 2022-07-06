var express = require('express');
var router = express.Router();
const indexController = require('../controllers/index');

/** Komandi koristeni za nodemon:
 * 1. npm i nodemon
 * 2. vo package.json smenete start skripta da povikuva so nodemon namesto so node
 */

// ROUTE PARAMETER

router.get('/', indexController.index) // localhost:3000/
      .get('/hehe', indexController.hehe) // localhost:3000/hehe
      .get('/create', indexController.create)
      .get('/user/:id/view', indexController.viewUser) // localhost:3000/3, lcl:3000/596584934
      .get('/user/:id/edit', indexController.editUser)
      .post('/', indexController.postCreate)


module.exports = router;
