/**
 * Dependencies
 */
var WPAPI = require( 'wpapi' );

/**
 * Define WP_REST_API
 * @type {WPAPI}
 */
var WP_REST_API = new WPAPI({
    endpoint: 'http://demo.hangnhathoangquan.com/wp-json',
    // username: 'hieusmall',
    // password: '123qweasd'
});

/**
 * Wordpress Woocommerce Cart API
 * @type {endpointFactory}
 */
WP_REST_API.cart = WP_REST_API.registerRoute('wc/store','cart', {
    params : []
});

/**
 * Wordpress Woocommerce Store Product API
 * @type {endpointFactory}
 */
WP_REST_API.products = WP_REST_API.registerRoute('wc/store','products', {
    params: ["context", "page", "per_page", "search", "after", "before", "date_column", "exclude", "include", "offset", "order",
        "orderby", "parent", "parent_exclude", "type", "sku", "featured", "category", "category_operator", "tag", "tag_operator",
        "on_sale", "min_price", "max_price", "stock_status", "attributes", "attribute_relation", "catalog_visibility", "rating"]
});

/**
 * Add namespaces
 * @type {{cart: endpointFactory, products: endpointFactory}}
 */
WP_REST_API._ns['wc/store'] = {
    cart: WP_REST_API.cart,
    products: WP_REST_API.products
}

/**
 * Export module
 */
module.exports = WP_REST_API;