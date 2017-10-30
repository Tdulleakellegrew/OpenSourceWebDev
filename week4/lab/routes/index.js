var express = require('express');
var router = express.Router();
var controller = require('./empl.controller');
/* GET home page. */
router.all('/', controller.home);
router.all('/index', controller.home);
router.all('/update/:id?', controller.update);
router.all('/delete/:id?', controller.delete);
router.all('/view/:id?', controller.view);
module.exports = router;
