const data = require('../data/zoo_data');

function getEmployeesData(name) {
  const namOrLas = data.employees.filter((e) =>
    e.firstName === name.name || e.lastName === name.name
      || e.id === name.id);
  return namOrLas
    .map((e) => ({ id: e.id,
      fullName: `${e.firstName} ${e.lastName}`,
      species: data.species.filter((a) =>
        e.responsibleFor.includes(a.id)).map((a) => a.name),
      locations: data.species.filter((a) =>
        e.responsibleFor.includes(a.id)).map((a) => a.location),
    }))[0];
}
function getTotalEmployees() {
  const total = data.employees
    .map((j) => ({ id: j.id,
      fullName: `${j.firstName} ${j.lastName}`,
      species: data.species.filter((a) =>
        j.responsibleFor.includes(a.id)).map((a) => a.name),
      locations: data.species.filter((a) =>
        j.responsibleFor.includes(a.id)).map((a) => a.location),
    }));
  return total;
}
const people = data.employees
  .map((l) => l.id);

function getEmployeesCoverage(name) {
  if (!name) {
    return getTotalEmployees();
  }
  if (!people.includes(name.id) && !name.name) {
    throw new Error('Informações inválidas');
  }
  if (name) {
    return getEmployeesData(name);
  }
}
// console.log(getEmployeesCoverage({ name: 'lizia' }));
module.exports = getEmployeesCoverage;
