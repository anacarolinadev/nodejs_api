const categoryData = require ('../data/categoryData');

exports.getCategoryList = function () {
    return categoryData.getCategoryList();
};

exports.getCategory = function (id) {
    return categoryData.getCategory(id);
};

exports.createCategory = function (category) {
    return categoryData.createCategory(category);
};

exports.updateCategory = function (category) {
    return categoryData.updateCategory(category);
};

exports.deleteCategory = function (id) {
    return categoryData.deleteCategory(id);
};