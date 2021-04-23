// #1
let a = 5;
let b = 8;

let adicao = a + b;
    console.log(adicao);

let subtracao = a - b;
    console.log(subtracao);

let multiplicacao = a * b;
    console.log(multiplicacao);
    
let divisao = a / b;
    console.log(divisao);

let modulo = a % b;
    console.log(modulo);

// #2
let a = 8;
let b = 6;

if(a > b){
    console.log(a)
} else{
    console.log(b)
}

// #3
let a = 4;
let b = 7;
let c = 1;

if(a > b && a > c){
    console.log(a)
} else if(b > a && b > c){
    console.log(b)
} else{
    console.log(c)
}

// #4
let x = -2;

if(x > 0){
    console.log("positive")
}else if(x < 0){
    console.log("negative")
} else{
    console.log("zero")
}

// #5
let ladoA = 50;
let ladoB = 90;
let ladoC = 40;

if(ladoA + ladoB + ladoC == 180 && ladoA > 0 && ladoB > 0 && ladoC > 0){
    console.log("true")
}else{
    console.log("false")
}

// #6
let peça = "BISHOP";

switch(peça.toLowerCase()){
    case "king":
        console.log('Uma casa em todas as direções');
        break
    case "queen":
        console.log("Diagonais, horizontal e vertical");
        break
    case "bishop":
        console.log("Diagonais");
        break
    case "horse":
        console.log("Movimento em L");
        break
    default:
        console.log("Peça não encontrada!");
}

// #7
let nota = 89;

    if(nota >= 90){
            console.log("A")
        } else if(nota >= 80){
            console.log("B") 
        } else if(nota >= 70){
            console.log("C")
        } else if(nota >= 60){
            console.log("D")   
        } else if(nota < 50 && nota > 0){
            console.log("E")
        } else if(nota < 0 || nota > 100){
            console.log("Erro indentificado")
        }

        // #8