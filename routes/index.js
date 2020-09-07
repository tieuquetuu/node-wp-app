var express = require('express');
var router = express.Router();
var website = require('../inc/website');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    styles: website.bundleCssURLs(),
    scripts: website.bundleJsURLs()
  });
});

module.exports = router;
