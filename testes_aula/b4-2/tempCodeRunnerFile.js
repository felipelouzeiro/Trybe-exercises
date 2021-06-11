let bingo = [];

let fisrtnumber = Math.ceil(Math.random() * 10);
let secondnumber = Math.ceil(Math.random() * 10);
let thirdnumber = Math.ceil(Math.random()) * 10;
let fourthnumber = Math.ceil(Math.random() * 10);

numerosBingo = [fisrtnumber, secondnumber, thirdnumber, fourthnumber];

numerosEscolhidos = [3, 6, 2, 0];
numerosEscolhidos2 = [5, 7, 1, 8];
numerosEscolhidos3 = [9, 10, 4, 5];


let listaEscolhidos = [numerosEscolhidos, numerosEscolhidos2, numerosEscolhidos3];

for(let gameIndex = 0; gameIndex < listaEscolhidos.length; gameIndex =+ 1){
    let hits = 0;
   for (let indexBingo = 0; indexBingo < numerosBingo.length; indexBingo += 1) {
     for (let indexNum = 0; indexNum < listaEscolhidos[gameIndex].length; indexNum += 1) {
        if (numerosBingo[indexBingo] === listaEscolhidos[gameIndex][indexBingo]){
            hits += 1;
         };
      };
   };
console.log(`Numero da mega: ${numerosBingo}`);
console.log(`Numero de acertos: ${hits}`);
console.log(`Numero de acertos: ${listaEscolhidos[gameIndex]}`);
console.log("----------------------------------------");
};

