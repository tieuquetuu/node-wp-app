var express = require('express');
var router = express.Router();
var WPRestAPI = require('../inc/WPRestAPI');
var WP_REST_API = require('../inc/wp-rest-api');

/*router.get('/products', function(req, res, next) {
    var {query} = req;
    WPRestAPI.wc.store.products.find(query)
        .then(findSuccess)
        .catch(findFailed);

    function findSuccess(products) {
        res.send(products);
    }
    function findFailed(e) {
        res.status(401).send({message: "Có lỗi rồi"});
    }
})*/

router.get('/cart', function (req, res, next) {
    (async function readCart(query) {
        try {
            return await WP_REST_API.wcStoreCart().get();
        } catch (e) {
            return Promise.reject(e);
        }
    })().then(readCartSuccess).catch(readCartFailed);

    function readCartSuccess(cart) {
        res.send(cart);
    }

    function readCartFailed(e) {
        res.status(401).send(e);
    }
})

router.get('/products', function (req, res, next) {
    WP_REST_API.products().get()
        .then(data => res.send(data))
        .catch(err => res.status(401).send(err));
});

module.exports = router;
