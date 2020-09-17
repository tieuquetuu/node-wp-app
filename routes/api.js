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

router.get("/hoangquan-sanpham", function (req, res, next){
    var {body} = req;
    // var XLSX = require("xlsx");
    var path = require("path");
    var fs = require("fs");
    var Excel = require('exceljs')
    // var listHangDangWeb = XLSX.readFile(path.join(__dirname, "../data/List hàng đăng web.xls"));
    // var tonKhoChiNhanh = XLSX.readFile(path.join(__dirname, "../data/Tồn kho chi nhánh.xls"));
    // console.log(Object.keys(tonKhoChiNhanh))
    // console.log(tonKhoChiNhanh.Sheets)
    // res.send(tonKhoChiNhanh)
    function tinhGia(str) {
        var numb = 0;
        str = typeof str == "string" && str.length ? str.replace(",", "") : "";
        // if (str.includes("-")) return numb;
        if (str && parseInt(str) != NaN) {
            numb = parseInt(str);
        }
        return numb
    }
    function tinhSoLuong(str) {
        var numb = parseInt(str) > 0 ? parseInt(str) : 0;
        return numb;
    }
    var danhSachSanPham = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/list_hang_dang_web.json"), {encoding: "utf-8"}));
    var tonKhoChiNhanh = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/ton_kho_chi_nhanh.json"), {encoding: "utf-8"}));
    var danhSachSanPhamSapo = danhSachSanPham.map(function (item) {

        var giaNhap = tinhGia(item[" Giá nhập "]);
        var giaBanLe = tinhGia(item[" Giá bán lẻ "]);
        var giaSiDacBiet = tinhGia(item[" Giá sỉ đặc biệt "]);
        var giaSi1 = tinhGia(item[" Giá sỉ 1 "]);
        var giaSi2 = tinhGia(item[" Giá sỉ 2 "]);
        var nhomHang = item["Nhóm hàng"];
        var product = {
            "Tên sản phẩm": item.s_Product_Name,
            "Hình thức quản lý sản phẩm": "Sản phẩm thường",
            "Mã loại sản phẩm" : nhomHang,
            "PL_Giá bán buôn": giaSi1,
            "PL_Giá sỉ Đặc Biệt": giaSiDacBiet,
            "PL_Giá bán lẻ" : giaBanLe,
            "PL_Giá sỉ 1": giaSi1,
            "PL_Giá sỉ 2": giaSi2,
            // "Mã loại sản phẩm": ""
            "Mã SKU": item.s_Product_ID,
            "Barcode": item.s_Product_ID,
            // "Đơn vị": donViTinh,
            // "Áp dụng thuế": "Có",
            // "LC_CN1_Giá vốn khởi tạo*": giaNhap,
            // "LC_CN1_Tồn kho ban đầu*": soLuongTonKhoCN1,
            // "LC_CN2_Giá vốn khởi tạo*": giaNhap,
            // "LC_CN2_Tồn kho ban đầu*": soLuongTonKhoCN2,
            // "LC_CN3_Giá vốn khởi tạo*": giaNhap,
            // "LC_CN3_Tồn kho ban đầu*": soLuongTonKhoCN3,
        };
        // Hoàng Quân Hai Bà Trưng	CN1
        // Hoàng Quân Vinhome	CN2
        // Hoàng Quân Quận 7	CN3
        // Hoàng Quân Trung Tâm	CN4
        // Hoàng Quân Online	CN5
        var thongTinTonKho =  tonKhoChiNhanh.find(obj => item.s_Product_ID === obj.s_Product_ID);
        thongTinTonKho = typeof thongTinTonKho == "object" && thongTinTonKho instanceof Object ? thongTinTonKho : null;
        if (thongTinTonKho) {
            var donViTinh = thongTinTonKho["Đơn vị tính"];
            var soLuongTonKhoCN1 = tinhSoLuong(thongTinTonKho[" Hai Bà Trưng "]);
            var soLuongTonKhoCN2 = tinhSoLuong(thongTinTonKho[" Vinhomes  "]);
            var soLuongTonKhoCN3 = tinhSoLuong(thongTinTonKho[" Quận 7 "]);
            product["LC_CN1_Giá vốn khởi tạo*"] = giaNhap;
            product["LC_CN1_Tồn kho ban đầu*"] = soLuongTonKhoCN1;
            product["LC_CN2_Giá vốn khởi tạo*"] = giaNhap;
            product["LC_CN2_Tồn kho ban đầu*"] = soLuongTonKhoCN2;
            product["LC_CN3_Giá vốn khởi tạo*"] = giaNhap;
            product["LC_CN3_Tồn kho ban đầu*"] = soLuongTonKhoCN3;
            product["LC_CN4_Giá vốn khởi tạo*"] = giaNhap;
            product["LC_CN4_Tồn kho ban đầu*"] = 0;
            product["LC_CN5_Giá vốn khởi tạo*"] = giaNhap;
            product["LC_CN5_Tồn kho ban đầu*"] = 0;
            product["Đơn vị"] = donViTinh;
        }
        return product
    });
    var data = {msg: "ok"};
    // console.log(danhSachSanPhamSapo.length)
    // var workbook = new Excel.Workbook();
    // var worksheet = workbook.addWorksheet('Sản Phẩm')
    // var file = fs.writeFileSync(path.join(__dirname, ' ../data/sanpham.json'), JSON.stringify({
    //     "Hoàng Quân": {
    //         "Sản phẩm" : danhSachSanPhamSapno
    //     }
    // }));
    res.send(danhSachSanPhamSapo[6]);
});

module.exports = router;
