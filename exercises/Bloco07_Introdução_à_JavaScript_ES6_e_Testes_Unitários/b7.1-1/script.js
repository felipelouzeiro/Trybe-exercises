const testingScope = (escopo) => { 
  escopoE = escopo ? 'Não devo ser utilizada fora do meu escopo (if)' : 'ótimo, fui utilizada no escopo !';
  }
testingScope(false);
console.log(escopoE)

// Modifique a estrutura da função para que ela seja uma arrow function .
// Modifique as concatenações para template literals .
// Copie o código abaixo.


const oddsAndEvens = [13, 3, 4, 10, 7, 2];
console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente !`);  

// Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(oddsAndEvens); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
// Copie o código abaixo.


const fatorialN = (n) => {
      if (n === 1) {
          return 1;
      } else {
          return n * fatorialN (n - 1);
    }
  }
  console.log(fatorialN(5));

  // Crie uma função que receba um número e retorne seu fatorial.
  // Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
  
  const fatorialN = (n) => n < 1 ? 1 : n * fatorialN (n - 1);
  console.log(fatorialN(5))
  // Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .


  // Crie uma função que receba uma frase e retorne qual a maior palavra.

  const maiorPalavra = (str) => {
  let strArray = str.split(" ");
  let bigWord = "";

  for (index = 0; index < strArray.length; index += 1) {
    if (strArray[index].length > bigWord.length){
          bigWord = strArray[index];
    }
  }
  return bigWord;
} 

console.log(maiorPalavra("a maior palavra"));