// Todos os exercícios devem ser realizados utilizando reduce , e se necessário outra HOF , a informação será citada no enunciado.
// 1 - Dada uma matriz, transforme em um array.

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
   const concatArr = arrays.reduce((a,b)=> { return a.concat(b)},['lucas'])
    // escreva seu código aqui


  console.log ((concatArr))