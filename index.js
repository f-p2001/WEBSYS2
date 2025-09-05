const express = require('express');
const app = express();

const productRouter = require('./src/product/product-route');
const customerRouter = require('./src/customer/customer-route');
const orderRouter = require('./src/order/order-route');

app.use(express.json());

app.use('/products', productRouter);
app.use('/customers', customerRouter);
app.use('/orders', orderRouter);

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
