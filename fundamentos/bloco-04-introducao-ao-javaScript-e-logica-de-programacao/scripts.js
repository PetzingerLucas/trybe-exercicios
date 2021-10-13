let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
    let todosOsNumeros = numbers[index];
    console.log(todosOsNumeros);
}
//

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let todosOsNumeros of numbers) {
    console.log(todosOsNumeros);
}

///

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let results = 0;
for (let index = 0; index < numbers.length; index += 1) {
    results += numbers[index];
}
console.log(results);

///

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}
let media = soma / numbers.length;
if (media >= 20) {
    console.log("maior que 20");
} else {
    console.log("menor que 20");
}

///
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = numbers[0];
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maiorNumero) {
        maiorNumero = numbers[index];
    }
}
console.log(maiorNumero);
// o valor da variável higherNumber poderia ser qualquer um, desde que fosse menor que o menor número do array numbers. Caso atribuíssemos o valor 101 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número maior que 101 no array. Para resolver esse problema vamos iniciar a variavel com o primeiro valor do array. Dessa forma podemos pular a posição 0 e iniciar com index = 1