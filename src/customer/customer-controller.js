const customers = require('../../customers');
function calculateAge(birthdate) {
  const birth = new Date(birthdate);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

function getAllCustomers(req, res) {
  let result = customers;

  
  if (req.query.gender) {
    result = result.filter(customer => 
      customer.gender.toLowerCase() === req.query.gender.toLowerCase()
    );
  }

 
  if (req.query.ageFrom && req.query.ageTo) {
    const from = Number(req.query.ageFrom);
    const to = Number(req.query.ageTo);
    result = result.filter(customer => {
      const age = calculateAge(customer.birthdate);
      return age >= from && age <= to;
    });
  }

 
  if (req.query.dateFrom && req.query.dateTo) {
    const from = new Date(req.query.dateFrom);
    const to = new Date(req.query.dateTo);
    result = result.filter(customer => {
      const created = new Date(customer.dateCreated);
      return created >= from && created <= to;
    });
  }

  res.send(result);
}

module.exports = {
  getAllCustomers
};





