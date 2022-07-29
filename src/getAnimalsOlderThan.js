const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const elemntAnimal = data.species
   .find((elemnt) => elemnt.name === animal);
//  return elemntAnimal.species
  return elemntAnimal.residents.every((elemnt) => elemnt.age >= age);
}

module.exports = getAnimalsOlderThan;
