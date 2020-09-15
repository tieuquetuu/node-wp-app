var express = require('express');
var router = express.Router();
var WP_REST_API = require("../inc/wp-rest-api");
var website = require('../inc/website');
var helpers = require("../inc/helpers");

/* GET home page. */
router.get('/', function(req, res, next) {
    var {query} = req;
    async function GetStoreProducts(query) {
        var {per_page, page} = query;
        per_page = ["number", "string"].includes(typeof per_page) && parseInt(per_page) > 0 ? per_page : null;
        page = ["number", "string"].includes(typeof page) && parseInt(per_page) > 0 ? page : null;
        try {
            var products = await WP_REST_API.products()
                .param("per_page", per_page)
                .param("page", page);

            return products;
        } catch (e) {
            Promise.reject(e);
        }
    }
    GetStoreProducts(query)
        .then(Success).catch(Failed);
    function Success(products) {
        res.render('index', {
            helpers: helpers,
            title: "Home Page",
            bodyClass: "homepage",
            products: products
        });
    }
    function Failed(e) {
        res.status(401).send(e)
    }
});

router.get('/store', function (req, res) {
    var {query} = req;
    async function FetchStoreProducts(query) {
        var {per_page, page} = query;
        per_page = ["number", "string"].includes(typeof per_page) && parseInt(per_page) > 0 ? per_page : null;
        page = ["number", "string"].includes(typeof page) && parseInt(per_page) > 0 ? page : null;
        try {
            var products = await WP_REST_API.products()
                .param("per_page", per_page)
                .param("page", page);

            return products;
        } catch (e) {
            Promise.reject(e);
        }
    }
    FetchStoreProducts(query)
        .then(Success).catch(Failed);
    function Success(products) {
        res.render('store', {
            helpers: helpers,
            title: "Cửa Hàng",
            bodyClass: "store",
            products: products
        });
    }
    function Failed(e) {
        res.status(401).send(e)
    }
})

router.get('/store/product/:id', function (req, res) {
    var {params} = req;
    var {id} = params;

    async function getProduct(id) {
        return [];
    }
    function Success(product) {
        res.send(product)
    }
    function Failed(e) {
        res.send(e)
    }
    getProduct(id)
        .then(Success)
        .catch(Failed)
});

module.exports = router;
