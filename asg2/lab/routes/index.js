var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next){
  res.render('about', {title: 'About'});
});

router.get('/form', function(req, res, next){
  res.render('form', {title: 'Form'});
});

router.post('/submit', function(req, res, next){
  res.render('submit', {title: 'Submit', name: req.body.name, email: req.body.email, comments: req.body.comments});
});

module.exports = router;
