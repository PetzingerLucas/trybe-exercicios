/* eslint-disable consistent-return */
// getData.js
const fetch = require('node-fetch');

const fetchProducts = async (busca) => {
  // seu código aqui
  const urlAPI = `https://api.mercadolibre.com/sites/MLB/search?q=${busca}`;
  const response = await fetch(urlAPI);
  const data = await response.json();
  // console.log(data);
  console.log(data.results);
  return data.results;
};

fetchProducts('computador');
// module.exports = getSuperHero;
