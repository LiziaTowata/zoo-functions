const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    const pringles = {};
    data.species.forEach((element) => {
      pringles[element.name] = element.residents.length;
    });
    return pringles;
  }
  if (!animal.sex) {
    const caderno = data.species.find((element) => element.name === animal.specie);
    return caderno.residents.length;
  }
  const caderno = data.species.find((element) => element.name === animal.specie);
  return caderno.residents.filter((element) => element.sex === animal.sex).length;
}
console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));
module.exports = countAnimals;
