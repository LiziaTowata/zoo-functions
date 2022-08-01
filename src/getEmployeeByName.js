const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }

  const peopleName = data.employees
    .find((e) => e.firstName === employeeName || e.lastName === employeeName);
  return peopleName;

  // if (employeeName) {
  //   data.species.find((algo) => algo.name === 'lastName');
  //   return employeeName;
  // }
}
module.exports = getEmployeeByName;
