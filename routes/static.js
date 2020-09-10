var express = require('express');
var router = express.Router();
var path = require("path");

/* GET */
router.use('/', express.static(path.join(__dirname, '../website/build/static')));

router.use('/swiper', express.static(path.join(__dirname, '../node_modules/swiper')));
router.use('/animate.css', express.static(path.join(__dirname, '../node_modules/animate.css')));

module.exports = router;
