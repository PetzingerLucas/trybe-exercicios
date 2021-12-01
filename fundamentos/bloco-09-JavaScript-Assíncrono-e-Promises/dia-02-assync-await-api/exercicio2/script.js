const GetCripto = async () => {
  const apiURL = 'https://api.coincap.io/v2/assets';
  const response = await fetch(apiURL);
  const data = await response.json();
  console.log(data.data);
  return data.data;
};

GetCripto();

const setCripto = async () => {
  const coins = await GetCripto();
  const list = document.querySelector('#listCriptos');
  coins.forEach((coin, index) => {
    if (index <= 9) {
      const newLi = document.createElement('li');
      newLi.innerText = `${coin.name} (${coin.symbol}): ${Number(coin.priceUsd).toFixed(2)}`;
      list.appendChild(newLi);
    }
  });
};

window.onload = () => setCripto();
