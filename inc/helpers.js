// Dependencies
var fs = require('fs');
var path = require('path');
var Entities = require("html-entities").AllHtmlEntities;

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

helpers.htmlEntitiesDecode = function(str) {
    const entities = new Entities();
    var str = entities.decode(str);
    return str;
}

module.exports = helpers;