const a = 25;
const b = 25;

console.log('Soma: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b));

//

const number = 6

if (number > 0) { console.log("positivo") } else if (number < 0) {
    console.log("negativo")
} else { console.log("zero") }

//


const a = 20;
const b = 21;

if (a > b) {
    console.log("'a' é maior que 'b'");
} else {
    console.log("'b' é maior que 'a'");
};

//
const a = 6;
const b = 4;
const c = 2;

if (a > b && a > c) {
    console.log('O maior número é: ' + a + ' (a)');
} else if (b > a && b > c) {
    console.log('O maior número é: ' + b + ' (b)');
} else {
    console.log('O maior número é: ' + c + ' (c)');
};

//concatenação de if//

let anguloA = 65;
let anguloB = 100;
let anguloC = 15;

let somaDosAngulos = anguloA + anguloB + anguloC

let todosOsAngulosPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if (todosOsAngulosPositivos) {
    if (somaDosAngulos === 180) {
        console.log(true);
    } else {
        console.log(false);
    };
} else {
    console.log('Erro: ângulo inválido');
}

//
let pecaDeXadrez = "Rainha"

switch (pecaDeXadrez) {
    case "Rainha":
        console.log("Pode se mover para qualquer lado!")
        break
    case "Peão":
        console.log("Pode se mover para uma casa na horizontal ou vertical.")
        break

}