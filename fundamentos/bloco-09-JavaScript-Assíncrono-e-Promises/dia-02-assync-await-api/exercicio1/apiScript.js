// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';
const options = {
  method: 'GET',
  headers: { Accept: 'application/json' },
};

const fetchJoke = async () => {
  const h2 = document.querySelector('#jokeContainer');
  try {
    const response = await fetch(API_URL, options);
    console.log(response);
    const data = await response.json();
    h2.innerHTML = data.joke;
  } catch (error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
  // Adicionar lógica aqui!
};

window.onload = () => fetchJoke();
