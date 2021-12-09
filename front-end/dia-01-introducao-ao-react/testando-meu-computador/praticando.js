
// // Por ser um código Javascript, o JSX permite que se faça injeções de algoritmos dentro da estrutura HTML. Portanto, é possivel que se aplique diretamente na estrutura códigos que renderizarão outras diversas expressões, por exemplo:

// const nome = 'Jorge Maravilha';
// const element = <h1>Hello, {nome}</h1>;

// // E se aprofundarmos um pouco mais chamando uma função na nossa constante element?
// function nomeCompleto (nome, sobrenome) {
//     return `${nome} ${sobrenome}`;
//   }
//   const element2 = <h1>Hello, {nomeCompleto("Jorge", "Maravilha")}</h1>;

// //   Agora, vamos incorporar a nossa constante element na função helloWorld , retornar um código JSX e encapsulá-la em uma div :
//   function helloWorld (nome, sobrenome) {
//     return <h1>Hello, {`${nome} ${sobrenome}`}</h1>;
//   }
  
//   const element3 = helloWorld("Jorge", "Maravilha");
//   const container = <div>{element3}</div>;

// //   Lembra que falamos sobre a substituição de class por className em JSX? Podemos também utilizar expressões Javascript para atribuir valor à este atributo.

// const nome2 = 'Jorge Maravilha';
// const classe = 'hello-class';
// const element4 = <h1 className={classe}>Hello, {nome2}</h1>;

// const textJSX = 'JSX';
// // Para fixar, crie um elemento JSX que recebe o valor "Hello, JSX" de uma constante chamada textJSX , e o incorpore em uma tag h1 .
// const saudacao = <h1>Hello,{textJSX}</h1>

// // ReactDOM.render
// // O ReactDOM.render é o responsável por renderizar e atualizar seu código dentro do HTML , exibindo seus elementos React .
// // Todas as vezes que fizermos alguma alteração no código, seja através de uma função ou interação de quem usa, o React DOM compara o elemento novo e seus elementos filhos com os anteriores e aplica mudanças somente onde é necessário para levar a aplicação ao estado desejado. Vamos ver um exemplo:

// function tick() {
//     const element = (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
//   }
  
//   setInterval(tick, 1000);


// //   CSS e Import
// // Você deve estar se perguntando: mas e como fica o CSS nesse contexto?
// // Não é nada muito diferente do que você já vem fazendo. Assim como fazia no HTML você deve criar um arquivo para manter todo o seu CSS e então deverá importá-lo onde você deseja utiliza-lo e colocar as classes e ids que você criou nos elementos da sua página. Para facilitar o entendimento veja o exemplo abaixo:

// //Exemplo no arquvo css;

// // // App.js
// // import React from 'react';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className='App'>
// //       <h1>APP</h1>
// //     </div>
// //   );
// // }

// // export default App;

// // Classes e React
// // Talvez você já tenha percebido, mas a principal diferença entre o uso de componentes por classe e o uso de componentes por função reside no fato daqueles gerados por classe terem acesso a métodos e ao estado próprios de qualquer componente React gerado via classe, como o método render() , que te permite renderizar todo o conteúdo criado na tela, os quais são acessíveis somente por componentes criados por classe na maior parte das versões do React. A sintaxe para criar um componente com classes é a seguinte:

// // import React from 'react';

// // class ReactClass extends React.Component {
// //   render() {
// //     return (
// //       <h1>My first React Class Component!</h1>
// //     )
// //   }
// // }
