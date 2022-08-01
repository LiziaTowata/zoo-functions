const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aquiS
  const elemntAnimal = data.species
    .find((elemnt) => elemnt.name === animal);
  return elemntAnimal.residents.every((elemnt) => elemnt.age >= age);
}
module.exports = getAnimalsOlderThan;
