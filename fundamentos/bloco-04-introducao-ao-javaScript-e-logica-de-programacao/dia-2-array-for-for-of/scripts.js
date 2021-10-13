let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);
// 3

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push('Fazer exercícios da Trybe'); // adiciona mais uma tarefa
console.log(tasksList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']
tasksList.unshift("pegar um cafezao");
console.log(tasksList)

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.shift(); // remove a última tarefa
console.log(tasksList);

// [ 'Tomar café', 'Reunião' ]

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask);

// 1


let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1]

console.log(menuServices);

let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

menu.push('Contato')
console.log(menu)

///FOR//

let numero = 3

for (let contador = 1; contador <= 10; contador++) {
    console.log('*')
    console.log(numero * contador)
}
///

let listaDeNomes = ['lucas', 'thai', 'cafe', 'bolinha']

for (let index = 0; index < listaDeNomes.length; index += 1) {
    let mensagem = "Bem vindo " + listaDeNomes[index] + "!";
    console.log(mensagem)
}
//

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {
    let lista = groceryList[index];
    console.log(lista)
}


///forof

let word = 'Hello';
for (let letter of word) {
    console.log(letter);
}


let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
    sum += 1;
    console.log(sum);
}
// 11
// 21
// 31


let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let name of names) {
    console.log(name)
}