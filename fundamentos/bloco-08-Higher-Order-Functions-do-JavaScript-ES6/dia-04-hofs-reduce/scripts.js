// A função soma todos os valores de um array:
// Apenas com o for :

const numbers = [32, 15, 3, 2, -5, 56, 10];
let sumNumbers = 0;
// A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!

for (let index = 0; index < numbers.length; index += 1) {
  sumNumbers += numbers[index];
}
console.log(sumNumbers); // 113

// Com .reduce :
const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers); // 113

// Ou seja:

const getSum = (result, number) => result + number;
const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113

// Dissecando as funções:
// Usando for :
// Necessidade de criar uma variável para acumular o resultado de cada iteração do for , a soma de cada resultado - let sumNumbers ;
// Necessidade de setar um valor inicial para variável - sumNumbers = 0 ;
// Usando .reduce :
// A função passada por parâmetro recebe dois parâmetros, o acumulador result e o elemento do array de cada iteração, number ;
// Como a função é uma arrow function que possui apenas uma linha, o retorno de cada iteração será: result + number ;
// O retorno é salvo no primeiro parâmetro , result . É como se você estivesse fazendo igual à primeira função, sumNumbers = sumNumbers + numbers[index] , mas nesse caso seria result = result + number ;
// Para entender melhor como o reduce funciona, veja a animação e o código abaixo.

const array = [50, 85, -30, 3, 15];
const maiorNumero = array.reduce((a, b) => {
  return a > b ? a : b;
}, 100);
console.log(maiorNumero);

//com filter
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumPares = numbers
  .filter((number) => number % 2 === 0)
  .reduce((a, b) => a + b);

// console.log(sumPares);

//somente com reduce
const sumPar = numbers.reduce((a, b) => (b % 2 == 0 ? a + b : a), 0);

console.log(sumPar);

// Agora crie uma função usando os dados dos estudantes que usamos no conteúdo do dia anterior, para mostrar na tela um relatório que diz em qual matéria o estudante foi melhor. Você usará tanto o map quanto, dentro dele, o reduce !
const estudantes = [
  {
    nome: "Jorge",
    sobrenome: "Silva",
    idade: 14,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: 67 },
      { name: "Português", nota: 79 },
      { name: "Química", nota: 70 },
      { name: "Biologia", nota: 65 },
    ],
  },
  {
    nome: "Mario",
    sobrenome: "Ferreira",
    idade: 15,
    turno: "Tarde",
    materias: [
      { name: "Matemática", nota: 59 },
      { name: "Português", nota: 80 },
      { name: "Química", nota: 78 },
      { name: "Biologia", nota: 92 },
    ],
  },
  {
    nome: "Jorge",
    sobrenome: "Santos",
    idade: 15,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: 76 },
      { name: "Português", nota: 90 },
      { name: "Química", nota: 70 },
      { name: "Biologia", nota: 80 },
    ],
  },
  {
    nome: "Maria",
    sobrenome: "Silveira",
    idade: 14,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: 91 },
      { name: "Português", nota: 85 },
      { name: "Química", nota: 92 },
      { name: "Biologia", nota: 90 },
    ],
  },
  {
    nome: "Natalia",
    sobrenome: "Castro",
    idade: 14,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: 70 },
      { name: "Português", nota: 70 },
      { name: "Química", nota: 60 },
      { name: "Biologia", nota: 50 },
    ],
  },
  {
    nome: "Wilson",
    sobrenome: "Martins",
    idade: 14,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: 80 },
      { name: "Português", nota: 82 },
      { name: "Química", nota: 79 },
      { name: "Biologia", nota: 75 },
    ],
  },
];

const maiorNota = estudantes.map((student) => ({
  name: student.nome,
  materia: student.materias.reduce((a, b) => {
    return a.nota > b.nota ? a : b;
  }).name,
}));

console.log(maiorNota);


// const getBestClass = (acc, materia) => {
//     if (acc.nota > materia.nota) return acc;
//     return materia;
//   };
  
//   const reportBetter = (students) => students.map((student) => ({
//     name: student.nome,
//     materia: student.materias.reduce(getBestClass).name}));
  
//   console.log(reportBetter(estudantes));


