const express = require('express');
const router = express.Router();
const {getAllOrders} = require('./order-controller');

router.get('/', getAllOrders);

module.exports = router;