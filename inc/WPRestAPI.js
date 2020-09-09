// Dependencies
var http = require("http");
var querystring = require('querystring');

var WPRestAPI = {};

WPRestAPI.config = {
    url: "http://demo.hangnhathoangquan.com/wp-json",
    hostname: 'demo.hangnhathoangquan.com',
    port: 80,
    protocol: 'http://',
    pathname: '/wp-json',
    woo_username_key: 'ck_525a233a5afe1d275a8237aa4ed91847dab1d5b7',
    woo_password_key: 'cs_565c2201c4d842772fba2ce7bf2e13bbd5948524',
};

WPRestAPI.getJson = (options) => {
    var options = typeof options == "object" && options instanceof Object && Object.keys(options).length > 0 ? options : {};
    return new Promise((resolve, reject) => {
        var req = http.get(options.url, (resp) => {
            let data = '';

            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                let jsonData = JSON.parse(data);
                return resolve(jsonData);
            });
        });

        req.on("error", (err) => {
            return  reject(err.message)
        });
    })
};

WPRestAPI.JsonRequest = function({url, method,auth, headers, queryObject, payload}) {
    return new Promise((resolve, reject) => {
        var api_url = new URL(url);
        const payloadData = typeof payload == "object" && payload instanceof Object ? querystring.stringify(payload) : null;
        var hostname = api_url.hostname || WPRestAPI.config.hostname;
        var port = api_url.port || WPRestAPI.config.port;
        var pathname = api_url.pathname || WPRestAPI.config.pathname;

        method = method.toUpperCase();
        queryObject = typeof queryObject == "object" && queryObject instanceof Object && Object.keys(queryObject).length ? queryObject : null;
        headers = typeof headers == "object" && headers instanceof Object && Object.keys(headers).length ? headers : null;
        auth = typeof auth == "string" && auth.length ? auth : false;

        if (queryObject) pathname += '?'+querystring.stringify(queryObject);

        /*var counter = 0;
        pathname += '?';
        for(var queryKey in queryObject){
            if(queryObject.hasOwnProperty(queryKey)){
                counter++;
                // If at least one query string parameter has already been added, preprend new ones with an ampersand
                if(counter > 1){
                    pathname+='&';
                }
                // Add the key and value
                pathname+=queryKey+'='+queryObject[queryKey];
            }
        }*/

        const options = {
            hostname: hostname,
            port: port,
            path: pathname,
            method: method,
            /*headers: {
                'Cache-Control': 'max-age=0',
                'Connection': 'keep-alive',
                'Content-Type': 'application/json'
            },*/
            headers: headers,
            auth: auth
        };
        if (payloadData) options.headers['Content-Length'] = Buffer.byteLength(payloadData);

        const req = http.request(options, (res) => {
            // console.log(`STATUS: ${res.statusCode}`);
            // console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
            let data = '';
            res.setEncoding('utf8');
            res.on('data', (chunk) => {
                // console.log(`BODY: ${chunk}`);
                data += chunk;
            });
            res.on('end', () => {
                var json = JSON.parse(data);
                resolve(json);
                // console.log('No more data in response.');
            });
        });

        req.on('error', (e) => {
            reject(e);
            // console.error(`problem with request: ${e.message}`);
        });

        // Write data to request body
        if(payloadData) req.write(payloadData);
        req.end();
    });
}

WPRestAPI.wc = {
};

WPRestAPI.wc.store = {

};

WPRestAPI.wc.store.products = {};

WPRestAPI.wc.store.products.find = async (query) => {
    try {
        var json = await WPRestAPI.JsonRequest({
            url:`${WPRestAPI.config.url}/wc/store/products`,
            method: 'get',
            queryObject: query});
        return json;
    } catch (e) {
        return Promise.reject(e);
    }
}

WPRestAPI.wc.store.cart = {};

module.exports = WPRestAPI;