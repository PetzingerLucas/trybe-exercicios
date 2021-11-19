const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
   names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]

// const emailListInData = [
//     'roberta@email.com',
//     'paulo@email.com',
//     'anaroberta@email.com',
//     'fabiano@email.com',
//   ];
  
//   const showEmailList = (email) => {
//     console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
//   };
  
//   // Adicione seu código aqui
//   emailListInData.forEach(showEmailList)


  const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = number => number % 5 === 0 && number % 3 === 0;
       
  // Adiciona seu código aqui

console.log(numbers.find(findDivisibleBy3And5));


const names2 = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = name => name.length = 5
  // Adicione seu código aqui:



console.log(names2.find(findNameWithFiveLetters));

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(id) {
    // Adicione seu código aqui
    return musicas.find((musica) => musica.id === id);
  }
  console.log((findMusic('31031685')));