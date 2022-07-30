const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (getEmployeeByName !== {}) {
    return {};
  }
  const 'animalNames' = data.employees
  .find((element) => element.firstName === employeeName || element.lastName === employeeName);  
}

module.exports = getEmployeeByName;
