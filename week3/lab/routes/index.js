var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let input = 0;
  res.render('index', { title: 'Express', in : input });
});

router.post('/', function(req, res, next) {
  console.log(req.body.input);
  let input = req.body.input;
  res.render('index', { title: 'Express', inp : input });
});

module.exports = router;
