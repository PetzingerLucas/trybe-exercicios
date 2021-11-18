// Ao chamar a função doingThings:

const wakeUp = () => `Acordando!!`;
const coffeeTime = () => "Bora tomar café!!";
const sleepTime = () => "Partiu dormir!!";
// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!
const doingThings = (param) =>{
const result =  param();
console.log(result)
}
doingThings(wakeUp)

doingThings(sleepTime)
doingThings(coffeeTime)



const numberChecker = (aposta, resultado) => aposta === resultado;

const lotteryResult = (aposta, callback) => {
  const number = Math.floor((Math.random() * 5));

  return callback(aposta, number) ? 'Parabéns você ganhou' : 'Tente novamente"!';
};

console.log(lotteryResult(2, numberChecker));