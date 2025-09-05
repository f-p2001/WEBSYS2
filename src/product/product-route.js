
const express = require('express');
const router = express.Router();
const {getAllProducts} = require('./product-controller');

router.get('/', getAllProducts);

module.exports = router;
