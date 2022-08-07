const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui

  // Passado o id de uma pessoa colaboradora, a função getOldestFromFirstSpeciesdeve
  //  encontrar a primeira espécie de animal gerenciado por essa pessoa,
  //  e retornar um array com nome, sexo e idade do animal mais dessa espécie velha.
  const colaboradora = data.employees.find((element) => element.id === id);
  const primeira = colaboradora.responsibleFor[0];
  const animalVelho = data.species.find((element) => element.id === primeira);
  const infMaisVelho = animalVelho.residents.sort((a, b) => a.age - b.age);
  const dadosVelhos = infMaisVelho[infMaisVelho.length - 1];
  const matrizInf = [dadosVelhos.name, dadosVelhos.sex, dadosVelhos.age];
  return matrizInf;
}
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
