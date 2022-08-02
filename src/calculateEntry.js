const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const child = entrants.filter((element) => element.age < 18).length;
  const adult = entrants.filter((element) =>
    element.age >= 18 && element.age < 50).length;
  const senior = entrants.filter((element) => element.age >= 50).length;
  const obj = { child, adult, senior };
  return obj;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const prices = countEntrants(entrants);
  return prices.child * 20.99 + prices.adult * 49.99 + prices.senior * 24.99;
}
module.exports = { calculateEntry, countEntrants };
