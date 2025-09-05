const express = require('express');
const router = express.Router();
const {getAllCustomers} = require('./customer-controller');

router.get('/', getAllCustomers);

module.exports = router;
