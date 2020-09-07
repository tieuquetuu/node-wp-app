// Dependencies
var fs = require('fs');
var path = require('path');

var website = {};

website.DIR = path.join(__dirname, '../website');

website.BUILD_DIR_NAME = 'build';

website.BUILD_DIR_PATH  = website.DIR + '/' + website.BUILD_DIR_NAME;

website.STATIC_DIR_NAME = 'static';

website.STATIC_DIR_PATH = website.BUILD_DIR_PATH + '/' + website.STATIC_DIR_NAME;

website.STATIC_CSS_DIR_PATH = website.STATIC_DIR_PATH + '/css';

website.STATIC_JS_DIR_PATH = website.STATIC_DIR_PATH + '/js';

website.bundleCssFiles = function() {
    var dir = fs.readdirSync(website.STATIC_CSS_DIR_PATH);
    var files = dir.filter(file => path.extname(file) === '.css' && file.includes(".chunk.css"));
    return files;
}

website.bundleJsFiles = function() {
    var dir = fs.readdirSync(website.STATIC_JS_DIR_PATH);
    var files = dir.filter(file => path.extname(file) === '.js' /*&& file.includes('.chunk.js')*/);
    return files;
}

website.bundleCssURLs = function() {
    var arr = website.bundleCssFiles().map(function (filename) {
        return '/' + website.STATIC_DIR_NAME +'/css/' + filename;
    });
    return arr;
}

website.bundleJsURLs = function() {
    var arr = website.bundleJsFiles().map(function (filename) {
        return '/'+ website.STATIC_DIR_NAME +'/js/' + filename;
    });
    return arr;
}

module.exports = website;