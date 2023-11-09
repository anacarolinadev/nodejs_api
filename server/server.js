const express = require('express');
const app = express();


app.use('/', require('./route/productRoute'));
app.use('/', require('./route/categoryRoute'));

app.listen(3000);