// Dependencies


// Define container
var wooAsync = {};

wooAsync.SapoAppConfig = {
    apiKey : "61b49a7423ce470fbaedbb5efd073161",
    secretKey: "5f6e6c66621743458bcd1ac361c5e4fd"
}

wooAsync.HoangQuanShop1 = {
    apiKey: "05168901c7f9494a996c428528e51e25",
    apiSecret: "cd4fbeaa4b564fc3965b33cc60481e4e",
    example: "https://05168901c7f9494a996c428528e51e25:cd4fbeaa4b564fc3965b33cc60481e4e@hoang-quan-shop-1.mysapo.net/admin/orders.json",
    description: "Ứng dụng riêng sử dụng phương thức xác thực Basic Authentication, theo định dạng https://apikey:apisecret@hostname/admin/resource.json"
}

module.exports = wooAsync;