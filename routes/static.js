var express = require('express');
var router = express.Router();
var path = require("path");

/* GET */
router.use('/', express.static(path.join(__dirname, '../website/build/static')));

module.exports = router;
