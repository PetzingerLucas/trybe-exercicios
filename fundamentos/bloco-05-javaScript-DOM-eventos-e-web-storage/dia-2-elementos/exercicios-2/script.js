function criarFilhos(pai, filho) {
  let parent = document.querySelector(pai);
  let son = document.createElement(filho)
  parent.appendChild(son);
}

function atribuirPropriedade(elemento, propriedade, conteudo) {
  let element = (document.querySelector(elemento)[propriedade] = conteudo);
}
criarFilhos('body', 'h3');
criarFilhos('body', "main");
criarFilhos('main', 'section');
criarFilhos('section', "p");
criarFilhos('main', 'section');
criarFilhos('main', 'section')

//criarFilhos ('.left-content','img')

//firstSection = document.querySelector('section').className = 'center-content'
// main = document.querySelector('main').className = "main-content"
//titulo = document.querySelector('h3').innerText = "Exercício 5.2 - JavaScript DOM"

atribuirPropriedade("main", "className", "main-content");
atribuirPropriedade("h3", "innerText", "Exercício 5.2 - JavaScript DOM");
atribuirPropriedade("section", "className", "center-content");
atribuirPropriedade("p", "innerText", "A princípio, parece divertido");

document.querySelectorAll('section')[1].className = 'left-content'
document.querySelectorAll('section')[2].className = 'right-content'
criarFilhos('.left-content', 'img')
atribuirPropriedade('.left-content img', 'src','https://picsum.photos/200') 
criarFilhos ('.right-content','ul')
let arrayNumbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis',
        'Sete', 'Oito', 'Nove', 'Dez']
for(let num in arrayNumbers){
    elementLi = document.createElement('li');
    elementLi.innerText = arrayNumbers[num]
    elementul = document.querySelector('.right-content ul') 
    elementul.appendChild(elementLi)
}
let h3 = ['h3','h3','h3']
for(i=0; i<h3.length;i+=1)
if(h3[i] == 'h3'){
    criarFilhos('main', 'h3')
}


//let section2 = document.querySelector('.left-content')
//let criarImagem = document.createElement('img')
//criarImagem.src = 'https://picsum.photos/200'
//section2.appendChild(criarImagem)

console.log(document.querySelector("body"));
