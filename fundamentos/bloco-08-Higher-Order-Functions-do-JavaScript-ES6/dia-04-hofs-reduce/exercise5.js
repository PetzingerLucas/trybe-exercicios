// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
 
   const counter = names.reduce((a, b) => a + b.split('').reduce((a,b) => {if (b === 'a' || b === 'A') return a + 1;return a;
       }, 0), 0);

 console.log(counter);