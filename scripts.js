// // setTimeout(() => {
// //   console.log('Comprar parafusos'); // Comprar parafusos
// //   console.log('Adicionar ao estoque'); // Adicionar ao estoque
// // }, 2000);

// // console.log('1 - Receber roda'); // 1 - Receber roda
// // console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
// // console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro

// const pushNumber = (list, number) => list.push(number);

// const numbers = [];

// pushNumber(numbers, 1);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// console.log(numbers);

// // const pushNumber = (list, number) => list.push(number);

// // let numbers = [];

// setTimeout(() => pushNumber(numbers, 1), 3000);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// console.log(numbers); // O retorno é [2, 3]

// // const pushNumber = (list, number) => list.push(number);

// // let numbers = [];

// setTimeout(() => pushNumber(numbers, 1), 3000);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// setTimeout(() => console.log(numbers), 3000);

const myExpenses = [
  {
    gym: 99,
  },
  {
    ifood: 200,
  },
  {
    phone: 60,
  },
  {
    internet: 100,
  },
];

const myIncome = 1000;

const handleExpenses = (expansees) => {
  const eachValue = expansees.map((item) => Object.values(item)[0]);
  const totalExpense = eachValue.reduce((acc, curr) => acc + curr, 0);
  return totalExpense;
};

const monthlyBudget = (income, expenses, callback) => {
  const totalExpenses = callback(expenses);
  const totalAfterExpenses = income - totalExpenses;

  console.log(`Balanço do mês:
      Recebido: R$${myIncome},00
      Gasto: R$${totalExpenses},00
      Saldo: R$${totalAfterExpenses},00 `);
};

console.log(monthlyBudget(myIncome, myExpenses, handleExpenses));

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = (firstName, lastName, nationality, callBack) => {
  const userToReturn = {
    firstName,
    lastName,
    nationality,
  };
  return callBack(userToReturn);
};

console.log(getUser('Lucas', 'Petzinger', 'Brasileiro', userFullName)); // complete a chamada da função;
// getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich"
console.log(getUser('Lucas', 'Petzinger', 'Brasileiro', userNationality));
// complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian"

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser2 = (firstName, lastName, nationality, callBack) => {
  setTimeout(() => {
    const user = {
      firstName,
      lastName,
      nationality,
    };
    console.log(callBack(user));
  }, delay());
};

getUser2('Lucas', 'Petzinger', 'Brasileiro', userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser2('Lucas', 'Petzinger', 'Brasileiro', userNationality);// deve imprimir "Ivan is Russian" depois de um certo tempo

const countryName = ({ name }) => console.log(`Returned country is ${name}`);
const countryCurrency = ({ name, currency }) => console.log(`${name}'s currency is the ${currency}`);

// const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const printErrorMessage = (error) => console.log(`Error getting country: ${error}`);

const getCountry = (onSuccess, onError) => {
  setTimeout(() => {
    const didOperationSucceed = Math.random() >= 0.5;
    if (didOperationSucceed) {
      const country = {
        name: 'Brazil',
        hdi: 0.759,
        currency: 'Real',
      };
      onSuccess(country);
    } else {
      const errorMessage = 'Country could not be found';
      onError(errorMessage);
    }
  }, delay());
};

// Deve imprimir "Returned country is Brazil" no sucesso,
//  ou "Error getting country: Country could not be found" em falha
getCountry(countryName, printErrorMessage);

// Deve imprimir "Brazil's currency is the Real" no sucesso,
// ou "Error getting country: Country could not be found" em falha
getCountry(countryCurrency, printErrorMessage);
