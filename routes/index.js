var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const storeUserController = require('./controllers/storeUser')

app.post('views/register',storeUserController)

module.exports = router;
