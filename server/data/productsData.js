const database = require('../infra/database');

exports.getProducts = function () {
    const products = database.query('select * from store.product order by id asc limit 10');
    return products;
};

exports.getProduct = function (id) {
    return database.query('select * from store.product where id = $1', [id]);  
};

exports.createProduct = function (product) {
    const query = database.query('insert into store.product ("name", "description",price,category_id)' +
    'values ($1, $2, $3, $4) RETURNING *', 
    [product.name, product.description, product.price, product.category_id]);

    return query;
};

exports.updateProduct = function (product) {
    return  database.query("UPDATE store.product SET name = $1, description = $2, price = $3, category_id = $4 WHERE id = $5 RETURNING *", [product.name, product.description, product.price, product.category_id, product.id]);
};

exports.deleteProduct = function (id) {
    return database.query("DELETE FROM store.product WHERE id = $1", [id]);  
};