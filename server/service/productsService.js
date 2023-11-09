const productsData = require ('../data/productsData');

exports.getProducts = function () {
    return productsData.getProducts();
};

exports.getProduct = function (id) {
    return productsData.getProduct(id);
};

exports.createProduct = function (product) {
    return productsData.createProduct(product);
};

exports.updateProduct = function (product) {
    return productsData.updateProduct(product);
};

exports.deleteProduct = function (id) {
    return productsData.deleteProduct(id);
};