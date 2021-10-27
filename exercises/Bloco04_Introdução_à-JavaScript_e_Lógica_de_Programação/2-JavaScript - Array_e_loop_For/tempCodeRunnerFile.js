let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// //#1
// for (let index = 0; index < numbers.length; index += 1){
//     console.log(numbers[index]);
// };

// //#2
// let soma = 0;
// for (let index = 0; index < numbers.length; index += 1){
//     soma += numbers[index];
// } console.log(soma);

//#3
// let soma = 0;
// let media = 0;
// for (let index = 0; index < numbers.length; index += 1){
//     soma += numbers[index];
//     media = (soma / numbers.length);
// } 
// console.log(media);

//#4
// let soma = 0;
// let media = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     soma += numbers[index];
//     media = (soma / numbers.length);
  
// }  if (media > 20) {
//         console.log(`numero maior que 20: ${media}`);
//     } else {
//         console.log(`numero menor ou igual a 20: ${media}`);
//     }

// //#5
// let numero = 0;
// let maiorNumero = numero;
// for (let index = 0; index < numbers.length; index += 1) {
//     if (numero < numbers[index]){
//             numero = numbers[index];
//     }
// } maiorNumero = numero;
//  console.log(maiorNumero);

// //#6
// let impar = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     if (index % 2 == 1){
//             impar += 1;
//     } 
// }
//     if (impar > 0) {
//         console.log(`${impar} numeros ímpares`);
//     } else {
//         console.log(`nenhum valor ímpar encontrado`);
//     }

//#7
// let numero = numbers[0];
// let menorNumero = numero;
// for (let index = 0; index < numbers.length; index += 1) {
//     if (numero > numbers[index]){
//             numero = numbers[index];
//     }
// } menorNumero = numero;
//  console.log(menorNumero);

// //#8
// let array = [];
// for (let index = 1; index <= 25; index += 1){
//     array.push(index);
// }


// console.log(array);

//#9
let array = [];
for (let index = 1; index <= 25; index += 1){
    array.push(index / 2);
}


console.log(array);