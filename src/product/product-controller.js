const products = require('../../products');
function getAllProducts(req, res) {
    let result = products;
  
    if (req.query.name) {
      const name = req.query.name.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(name));
    }
    if (req.query.description) {
      const desc = req.query.description.toLowerCase();
      result = result.filter(p => p.description.toLowerCase().includes(desc));
    }
    if (req.query.priceFrom && req.query.priceTo) {
      const from = Number(req.query.priceFrom);
      const to = Number(req.query.priceTo);
      result = result.filter(p => p.price >= from && p.price <= to);
    }
    if (req.query.stockFrom && req.query.stockTo) {
      const from = Number(req.query.stockFrom);
      const to = Number(req.query.stockTo);
      result = result.filter(p => p.stock >= from && p.stock <= to);
    }
  
    res.json(result);
  }
  
  module.exports = { getAllProducts };