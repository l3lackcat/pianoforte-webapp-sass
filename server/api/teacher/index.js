'use strict';

var express = require('express');
var controller = require('./teacher.controller');

var router = express.Router();

router.get('/:branchId', controller.index);
router.get('/:branchId/:teacherId', controller.show);

module.exports = router;