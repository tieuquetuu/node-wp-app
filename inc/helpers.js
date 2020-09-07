// Dependencies
var fs = require('fs');
var path = require('path');

// define helpers
var helpers = {};

helpers.WebsiteBuildFolder = path.join(__dirname, '../website/build');
helpers.WebsiteBuildStaticCss = helpers.WebsiteBuildFolder + '/static/css';
helpers.WebsiteBuildStaticJs = helpers.WebsiteBuildFolder + '/static/js';

helpers.WebsiteBundleCss = function() {
    var dir = fs.readdirSync(helpers.WebsiteBuildStaticCss);
    var files = dir.filter(file => path.extname(file) === '.css');
    return files;
}

helpers.WebsiteBundleJs = function() {
    var dir = fs.readdirSync(helpers.WebsiteBuildStaticJs);
    var files = dir.filter(file => path.extname(file) === '.js' && file.includes('.chunk.js'));
    return files;
}

module.exports = helpers;