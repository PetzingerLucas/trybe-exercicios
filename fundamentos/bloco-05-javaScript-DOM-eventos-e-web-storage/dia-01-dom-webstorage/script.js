let cabecalho = document.getElementById("header-container");
cabecalho.style.backgroundColor = "green";
cabecalho.style.color = "white";

function alteraCor(elemento, cor) {
    document.querySelector(elemento).style.backgroundColor = cor;
}

alteraCor(".emergency-tasks", "green");

function alteraCorBackground(elemento, cor) {
    for (index of document.querySelectorAll(elemento)) {
        index.style.backgroundColor = cor;
    }
}


alteraCorBackground('.no-emergency-tasks', 'green');


function alteraCorTexto(elemento, cor) {
    for (index of document.querySelectorAll(elemento)) {
        index.style.color = cor;
    }
}

alteraCorTexto('.no-emergency-tasks h3', 'white')

alteraCorTexto('.emergency-tasks h3', 'white')


alteraCorBackground('.emergency-tasks h3', 'blue');


alteraCorBackground('.no-emergency-tasks h3', 'blue');