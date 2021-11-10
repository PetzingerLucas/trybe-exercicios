    //   const testingScope = (escopo) => {
    //     if (escopo === true) {
    //       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    //       ifScope = `${ifScope} ótimo, fui utilizada no escopo !`
    //       console.log(ifScope);
    //     } else {
    //       let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    //       console.log(elseScope);
    //     }
    //   }

    //   testingScope(true);

      const oddsAndEvens = [13, 3, 4, 10, 7, 2];

      const numerosOrdenados = ()=> oddsAndEvens.sort((a,b) => a-b);

      console.log(numerosOrdenados()); 

      //https://ricardo-reis.medium.com/o-m%C3%A9todo-sort-do-array-javascript-482576734e0a//

      longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

        const fatorial = (n)=> {
        let fator = []
        for (let i=1; i<=n;i+=1){
            fator.push(i)
        }
        let fatorialResult =  fator.reduce((a,b) => a*b)
         console.log(fatorialResult)
        }
fatorial(6)
//
const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5));



