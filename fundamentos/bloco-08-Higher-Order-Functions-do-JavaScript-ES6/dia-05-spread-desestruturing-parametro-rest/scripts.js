// // Como vimos no vídeo, o operador spread é um recurso do ES6 que nos permite espalhar os valores de um objeto iterável, como um array, em um novo objeto. Dessa forma, apenas copiamos as informações do array original e colamos em outro lugar. Acompanhe o exemplo numérico abaixo para fixar melhor a ideia do spread :

// const numbers = [1, 2, 3];

// const newArray = [ 4, 5, 6,...numbers];
// console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
// console.log(numbers); // [ 1, 2, 3 ]


// // Muito legal, né? E você pode usar o spread em outra posição de newArray . Experimente passar o ...numbers no final do array e veja o que acontece. O spread é muito útil também quando precisamos combinar arrays em uma única estrutura, como ilustrado abaixo:
// const spring = ['OUT', 'NOV', 'DEZ'];
// const summer = ['JAN', 'FEV', 'MAR'];
// const fall = ['ABR', 'MAI', 'JUN'];
// const winter = ['JUL', 'AGO', 'SET'];

// const months = [...summer, ...fall, ...winter, ...spring];
// console.log(months); /* [
//   'JAN', 'FEV', 'MAR',
//   'ABR', 'MAI', 'JUN',
//   'JUL', 'AGO', 'SET',
//   'OUT', 'NOV', 'DEZ'
// ] */

// // Outro uso interessante do spread é no argumento de uma função que recebe vários parâmetros. No próximo exemplo, temos uma função que calcula o IMC (índice de massa corporal) de um paciente. A função recebe como parâmetros o peso e a altura da pessoa, e retorna o resultado arredondado do IMC. Podemos salvar os dados do paciente em um array e utilizar o spread para expandir esses valores no argumento da função que calcula o IMC:

// const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
// const patientInfo = [60, 1.7];

// console.log(imc(...patientInfo)); // 20.76


// // E você pode aplicar esse conceito em funções prontas do Javascript que recebem múltiplos parâmetros, como as funções Math.max e Math.min . Vamos ver um exemplo?
// // Copiar

// const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

// console.log(Math.max(...randomNumbers)); // 800
// console.log(Math.min(...randomNumbers)); // 5

// // Outro exemplo que pode ser válido para a sua compreensão é que você também pode fazer o mesmo com objetos. Veja o exemplo abaixo:
// const people = {
//     id: 101,
//     name: 'Alysson',
//     age: 25,
//   };
  
//   const about = {
//     address: 'Av. Getúlio Vargas, 1000',
//     occupation: 'Developer',
//   };
  
//   const customer = { ...people, ...about };
//   console.log(customer); /* {
//     id: 101,
//     name: 'Alysson',
//     age: 25,
//     address: 'Av. Getúlio Vargas, 1000',
//     occupation: 'Developer'
//   } */

//   Para fixar
// Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar. Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens , faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread .

// // Faça uma lista com as suas frutas favoritas
// const specialFruit = ['Morango', 'Banana', 'Kiwi'];

// // Faça uma lista de complementos que você gostaria de adicionar 
// const additionalItens  = ['Leite em pó', 'Leite condensado', 'Granola'];

// const fruitSalad = (fruit, additional) => {
//     const acaiIngredients = {Frutas:[...fruit], Adicionais: [...additional]}
//   // Esreva sua função aqui
//   return acaiIngredients
// };

// console.log(fruitSalad(specialFruit, additionalItens));



//REST
// Agora que você viu como funciona o spread operator , vamos aprender mais um recurso que irá te auxiliar a criar funções que recebem um número ilimitado de argumentos: o parâmetro rest .
// O parâmetro rest é uma feature do ES6 que permite com que você crie funções que recebam um número variável de argumentos. Assim, suas funções ficam mais flexíveis. Os argumentos que serão passados como parâmetro são salvos em um array que pode ser acessado de dentro da função. Por isso, podemos passar qualquer tipo de parâmetro quando usamos o rest . Todos eles serão colocados dentro de um array, o que te permite usar métodos como o .length . Acompanhe o exemplo abaixo para entender melhor essa ideia:

function quantosParams(...args) {
    console.log('parâmetros:', args);
    return `Você passou ${args.length} parâmetros para a função.`;
  }
  
  console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
  console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.;

//   Observe no segundo console.log que passamos diferentes tipos de argumentos para a função quantosParams e todos foram colocados em um array. Quer ver mais um exemplo onde o rest é muito útil? Acompanhe!

  const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88

// Você certamente já precisou extrair valores de um objeto em Javascript. No exemplo abaixo, como você faria para imprimir o valor de cada propriedade do objeto product ?
const product = {
    nome: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };

//   Uma forma seria acessar os valores utilizando a notação de objeto, como console.log(product.name) , e repetir para cada propriedade. Essa tarefa é repetitiva e verbosa...quando lidamos com objetos mais complexos, ela seria até mesmo impraticável. Para a nossa alegria o ES6 introduz mais um recurso para tornar atividades corriqueiras, como acessar os valores de um objeto, mais simples e com menos declarações. Essa feature é o que chamamos de desestruturação de objeto ou object destructuring .
// E como exatamente funciona a desestruturação de objeto? Vamos voltar ao exemplo do objeto product . A sintaxe da desestruturação de objetos pede para passarmos o nome das propriedades que queremos acessar do lado esquerdo, entre chaves, e o objeto do lado direito:

  const { name } = product;
// console.log(name); // Smart TV Crystal UHD

const { nome, seller } = product;
console.log(nome); // Smart TV Crystal UHD
console.log(seller); // Casas de Minas


// Dessa forma, conseguimos extrair o valor da propriedade que precisamos acessar com muito menos código, atribuindo este valor à variáveis. Vale lembrar também que podemos adicionar quantas propriedades forem necessárias dentro das chaves, basta seguirmos a sintaxe da desestruturação de objetos.
// // Outro truque legal dessa feature é que você pode reatribuir o nome da propriedade que deseja acessar ao declará-la como uma variável. Acompanhe o exemplo abaixo.
// const student = {
//     a: 'Maria',
//     b: 'Turma B',
//     c: 'Matematica',
//   };

//   As propriedades do objeto student não são nada descritivas, não é mesmo? Se fossemos desestruturar esse objeto, as variáveis que seriam criadas ao extrair as propriedades de students teriam nomes sem significado...pensando nisso, podemos trocar o nome da variável ao fazermos a desestruturação:

  // const student = {
  //   a: 'Maria',
  //   b: 'Turma B',
  //   c: 'Matematica',
  // };
  
  const { a: names, b: classAssigned, c: subject } = student;
  
  console.log(names); // Maria
  console.log(classAssigned); // Turma B
  console.log(subject); // Matemática


//   Nesse exemplo, informamos qual a propriedade que gostaríamos de acessar e a declaramos em uma nova variável seguindo a sintaxe: { propriedade:nomeVariável } = objeto . Essa forma de acessar um valor de um objeto e atribuí-lo a uma variável é equivalente ao que temos abaixo:
// Copiar

// const student = {
//   a: 'Maria',
//   b: 'Turma B',
//   c: 'Matematica',
// };
// const name = student.a;
// console.log(name); // Maria


// Você deve estar se perguntando: o que acontece quando tento acessar um campo inexistente? Experimente fazer esse teste! Como sabemos, o Javascript não vai conseguir fazer essa associação porque esse campo não existe e a variável receberá o valor undefined .
// Por fim, uma outra situação que podemos usar a desestruturação de objetos é quando queremos passar os valores de um objeto como parâmetros para uma função, como no exemplo abaixo:
// Copiar

const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas


// Como vimos na sessão anterior, podemos utilizar a desestruturação para acessar valores de um objeto e atribuí-los a variáveis. Você certamente já acessou um valor de uma posição do array da seguinte forma:
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];

const firstCountry = arrayCountries[0];
const secondCountry = arrayCountries[1];
const thirdCountry = arrayCountries[2];
const fourthCountry = arrayCountries[3];

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada

const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;



console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada

// Para Fixar
// 1 - Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
// saudacoes[1](saudacoes[0]); // Olá
// Produza o mesmo resultado acima, porém utilizando array destructuring

const [firstElement, secondElement] = saudacoes;

secondElement(firstElement)

// 2 - A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.

let comida = 'gato'
;
let animal = 'água';
let bebida = 'arroz';

// console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

[comida,animal,bebida] = [bebida, comida, animal]

console.log(comida,animal,bebida)

// 3 - array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares .
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

[,,, ...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];



// Agora você já sabe como aplicar desestruturação em objetos e arrays. Você se lembra do que acontece quando tentamos acessar:
// uma propriedade que não existe em um objeto?
// um valor em uma posição inexistente em um array?

const person = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
  };
  
  const { nationality = 'Brazilian' } = person;

  console.log(nationality );

  const position2d = [1.0, 2.0];
const [x, y, z = 3] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0



// Do jeito que está, quando passamos person para a função GetNationality o retorno é João is undefined . Ajuste a função GetNationality para que a chamada GetNationality(person) retorne João is Brazilian .

const getNationality = ({ firstName, nationality = 'Brasilian' }) =>{  return `${firstName} is ${nationality}`};

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

  
//   Object Property Shorthand
// Você já deve ter percebido que uma das vantagens do ES6 é que a nova sintaxe elimina códigos repetitivos, contribuindo para a limpeza do código. A property shorthand é um recurso muito útil na hora de declarar objetos em Javascript. A função abaixo recebe como parâmetro informações sobre um novo usuário e retorna um objeto contendo esses dados. Observe que as propriedades do objeto retornado e os argumentos que passamos para newUser são idênticos. Essa repetição parece desnecessária, não é mesmo?

const newUser = (id, name, email) => {
    return {
      id: id,
      name: name,
      email: email,
    };
  };
  
  console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

//   É exatamente essa repetição que a feature property shorthand elimina: podemos simplesmente substituir id: id por id que o Javascript entende que você quer atribuir o valor de id a uma propriedade com o mesmo nome que o parâmetro passado:


  const newUser = (id, name, email) => {
    return {
      id,
      name,
      email,
    };
  };
  
  console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }



//   Para Fixar
// Agora é hora de praticar: altere a função getPosition utilizando a property shorthand .
// Copiar
const getPosition = (latitude, longitude) => ({
  latitude,
  longitude, });

console.log(getPosition(-19.8157, -43.9542));


// Por último, mas não menos importante, vamos entender o que é o parâmetro default . Imagine que você queira executar a função greeting abaixo, que imprime uma saudação para o usuário. O que acontece quando você chama a função sem passar o argumento que ela espera? Faça esse teste com o exemplo no seu editor de códigos!

const greeting = (user) => console.log(`Welcome ${user}!`);


greeting(); // Welcome undefined!

// Você verá que a função retornará undefined . Você consegue pensar em uma forma de corrigir esse problema? Afinal, podemos esquecer de chamar a função com o nome do usuário. Uma solução seria:


const greeting = (user) => {
    const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
    console.log(`Welcome ${userDisplay}!`);
  };
  
  greeting('lucas'); // Welcome usuário!


//   Essa solução não parece muito elegante, não é mesmo? Afinal, precisamos de incluir uma linha para checar se o parâmetro é indefinido. Se sim, definimos que user será 'usuário' . Caso contrário, a função irá imprimir a mensagem com o nome do usuário passado como argumento.
// Com o ES6, podemos pré-definir um parâmetro padrão para a função. Assim, podemos reescrever o exemplo anterior da seguinte forma:

  const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting('lucas'); // // Welcome usuário!



  
//   Para Fixar
// Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.


const multiply = (number, value = 1) => number * value

  console.log(multiply(8,2));