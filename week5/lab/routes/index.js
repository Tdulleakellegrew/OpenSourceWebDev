var express = require('express');
var router = express.Router();
var controller = require('./empl.controller');
/* GET home page. */
router.get('/api/v1/employees', controller.getAll);
router.get('/api/v1/employees/:employeeid', controller.getOne);
router.post('/api/v1/employees', controller.post);
router.put('/api/v1/employees/:employeeid', controller.put);
router.delete('/api/v1/employees/:employeeid', controller.delete);
module.exports = router;
