const express = require('express');
const router = express();
const categoryService = require ('../service/categoryService');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/category', async function (req, res) {
    try {
        const category = await categoryService.getCategoryList();
        res.json(category);
    } catch(error) {
        res.json(error);
    }
});

router.get('/category/:id', async function (req, res) {
    try {
        const { id } = req.params;
        const category = await categoryService.getCategory(id);
        res.json(category[0]);
    } catch(error) {
        res.json(error);
    }
});

router.post('/category', async function (req, res) {
    try {
        const data = req.body;
        const category = await categoryService.createCategory(data); 

        res.json(category[0]);
    } catch(error) {
        res.json(error);
    }

});

router.put('/category', async function (req, res) {
    try {
        const data = req.body;
        
        const category = await categoryService.updateCategory(data); 

        res.json(category[0]);
    } catch(error) {
        res.json(error);
    }
});

router.delete('/category/:id', async function (req, res) {
    try {
        const { id } = req.params;
        console.log(id);
        const category = await categoryService.deleteCategory(id); 

        res.json("successively removed");
    } catch(error) {
        res.json(error);
    }
});

module.exports = router;
