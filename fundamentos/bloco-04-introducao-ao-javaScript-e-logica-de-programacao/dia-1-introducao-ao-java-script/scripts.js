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