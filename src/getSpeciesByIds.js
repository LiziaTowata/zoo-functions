const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (!ids) {
    return [];
  }
  if (ids.length > 1) {
    const moreId = data.species.filter((element) => ids.includes(element.id));
    return moreId;
  }
  const justId = data.species.filter((element) => ids.includes(element.id));
  return justId;
}
module.exports = getSpeciesByIds;
