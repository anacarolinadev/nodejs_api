const database = require('../infra/database');

exports.getCategoryList = function () {
    return database.query('select * from store.category order by id asc limit 10');  
};

exports.getCategory = function (id) {
    return database.query('select * from store.category where id = $1', [id]);  
};

exports.createCategory = function (category) {
    const query = database.query('insert into store.category ("name") values ($1) RETURNING *', [category.name]);

    return query;
};

exports.updateCategory = function (category) {
    return  database.query("UPDATE store.category SET name = $1 WHERE id = $2 RETURNING *", [category.name, category.id]);
};

exports.deleteCategory = function (id) {
    return database.query("DELETE FROM store.category WHERE id = $1", [id]);  
};