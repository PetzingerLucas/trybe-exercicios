singer = {
    name: "Milton",
    lastName: "Nascimento",
    nickName: "Bituca",
    age: 77,
    bestAlbuns: ["Travessia", "Clube Da Esquina", "Minas"],
    bornInfo: { state: "Rio de Janeiro", city: "Rio de Janeiro" },
};

console.log(
    "O cantor" +
    " " +
    singer.name +
    singer.lastName +
    " " +
    "possui" +
    " " +
    singer.age +
    " " +
    "anos."
);

singer["fullName"] = singer.name + " " + singer.lastName;

console.table(singer);

console.log(
    "O cantor" +
    " " +
    singer.fullName +
    " " +
    "nasceu no estado do" +
    " " +
    singer.bornInfo.state
);

//

let player = {
    name: "Marta",
    lastName: "Silva",
    age: "34",
    medals: { golden: 2, silver: 3 },
};
console.log(
    "a jogadora" +
    " " +
    player["name"] +
    " " +
    player["lastName"] +
    " " +
    "tem" +
    " " +
    player["age"] +
    " " +
    "anos" +
    " " +
    "de idade"
);

player["bestInTheworld"] = [2006, 2007, 2008, 2009, 2010, 2018];

console.table(player);

console.log(
    "A jogadora" +
    " " +
    player.name +
    " " +
    player.lastName +
    " " +
    "foi eleita a melhor do mundo ṕor" +
    " " +
    player.bestInTheworld.length +
    " " +
    "vezes"
);

///1

let names = {
    person1: "João",
    person2: "Maria",
    person3: "Jorge",
};

for (let key in names) {
    console.log(names[key]);
}

///2
let car = {
    model: "A3 Sedan",
    manufacturer: "Audi",
    year: 2020,
};
for (let key in car) {
    console.log(key, car[key]);
}

////

let statusCarro = "desligado";
let aceleracao = 0;
let rotacao = 0;

function ligarDesligar() {
    if (statusCarro === "desligado") {
        statusCarro = "ligado";
    } else {
        ("desligado");
    }

    return statusCarro;
}

function acelerar(incremento) {
    aceleracao = aceleracao + incremento;

    return "Acelerando a" + aceleracao + "m/s";
}

function frear(decremento) {
    aceleracao = aceleracao - decremento;
    return "desalerando para" + aceleracao + "m/s";
}

function girarVolante(anguloRotacao) {
    rotacao = anguloRotacao
    return rotacao + 'º'
}