const express = require('express');
const router = express();
const productsService = require ('../service/productsService');
const categoryService = require ('../service/categoryService');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/products', async function (req, res) {
    const products = await productsService.getProducts();

    for await (const product of products) {
        let id = product.category_id;
        const category = await categoryService.getCategory(id);
        product.category = category;
        delete product.category_id;
    }
    
    res.json(products);
});

router.get('/products/:id', async function (req, res) {
    try { 
        const { id } = req.params;
        const products = await productsService.getProduct(id);
        for await (const product of products) {
            let category_id = product.category_id;
            const category = await categoryService.getCategory(category_id);
            product.category = category;
            delete product.category_id;
        }

        res.json(products[0]);
    } catch(error) {
        res.json(error);
    }
});

router.post('/products', async function (req, res) {
    try {
        const data = req.body;
        const product = await productsService.createProduct(data); 

        res.json(product[0]);
    } catch(error) {
        res.json(error);
    }

});

router.put('/products', async function (req, res) {
    try {
        const data = req.body;
        
        const product = await productsService.updateProduct(data); 

        res.json(product[0]);
    } catch(error) {
        res.json(error);
    }
});

router.delete('/products/:id', async function (req, res) {
    try {
        const { id } = req.params;
        console.log(id);
        const product = await productsService.deleteProduct(id); 

        res.json("successively removed");
    } catch(error) {
        res.json(error);
    }
});

module.exports = router;
