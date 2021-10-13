const myName = "Lucas";
const birthCity = "Sorocaba";

let birthYear = 2030;

birthYear = 2021;
console.log(myName, birthCity, birthYear);

let movie = "Avangers"; //string literal
let score = 10.5; //number literal
let isValid = true; //boolean
let name; //undefined
let color = null; //redefinition
//+, -, *, /, **

let salary = 3500;

console.log(salary + salary);
console.log(salary - salary);
console.log(salary * salary);
console.log(salary / salary);

salary++;

console.log(salary);

//if - se
//else - senão


let trybe = 15;

if (trybe >= 14 && trybe < 14.40) {
    console.log("Esquenta")
        //codigo
} else if (trybe >= 16.30 && trybe < 17.50) {
    console.log("Aula ao Vivo")
        //outra condicao
} else if (trybe >= 19.40 && trybe < 20) {
    console.log("Fechamento")
        //outra condicao
} else {
    console.log("Fora dos momentos sincronos")
        //codigo
}

//Operadores Lógicos //&& = AND;||= OR; ! = NOT

const comida = 'Misto quente';
const bebida = 'cafézinho';

if (bebida === 'cafézinho' && comida === 'pão na chapa') {
    console.log('Muito obrigado pela refeição :)');
} else {
    console.log('Acho que houve um engano com meu pedido');

}
const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaDeCompras = cenouras && leite && arroz && feijao;

console.log(listaDeCompras);

//Conceito Cheat sheet//
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

//
const currentHour = 22

let message = ""

if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
} else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour >= 11 && currentHour < 14) {
    message = "Hora do almoço!!!";
} else if (currentHour < 11 && currentHour < 4) {
    message = "Hmmm, cheiro de café recém passado";
}
console.log(message);
//

const bebidaPrincipal = 'cafezinho';
const bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
    console.log("Obrigado por me atender :D")
} else {
    console.log("Ei, eu não pedi isso!");
}

//
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

//
let weekDay = "Domingo"

if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") { console.log("Oba, mais um dia de aprendizado na Trybe >: D.") } else {
    console.log("FINALMENTE, descanso merecido UwU")
}
//
//OPERADOR NOT//

console.log((2 + 2) === 4);

console.log(!(2 + 2) === 4);

const squirtle = "melhor pokemon inicial";

console.log(!squirtle); // false

console.log(!42); // false

console.log(!0); // true
// O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.

console.log(!null); // true

console.log(!undefined); // true

//switch -- case

let trafficLight = "Amarelo";

switch (trafficLight) {
    case "Vermelho":
        console.log("Pare");
        break;
    case "Amarelo":
        console.log("Atenção");
        break;
    case "Amarelo":
        console.log("Siga");
        break;
    default:
        console.log = ("Valor não identificado")
}

let resultado = "aprovado"

switch (resultado) {
    case "aprovado":
        console.log("Você foi aprovado!");
        break
    case "reprovado":
        console.log("Você foi reprovado!");
        break
    case "lista":
        console.log("Você está na lista de espera")
        break
    default:
        console.log("Não há dados")
}
///