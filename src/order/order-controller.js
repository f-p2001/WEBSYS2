const orders = require('../../orders');

function getAllOrders(req, res){
    let result = orders;
    if (req.query.status) {
        result = result.filter(o => o.status === req.query.status);
      }
    if (req.query.amountFrom && req.query.amountTo) {
        const from = Number(req.query.amountFrom);
        const to = Number(req.query.amountTo);
        result = result.filter(o => o.totalAmount >= from && o.totalAmount <= to);
      }
      res.send(result);

}

module.exports = {
    getAllOrders
}