// #1
let a = 5;
let b = 8;

let adicao = a + b;
    console.log(adicao)

let subtracao = a - b;
    console.log(subtracao)

let multiplicacao = a * b;
    console.log(multiplicacao)
    
let divisao = a / b;
    console.log(divisao)

let modulo = a % b;
    console.log(modulo)

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
        let a = 7;
        let b = 5;
        let c = 6;

        if(a % 2 == 0 || b % 2 == 0 || c % 2 == 0){
            console.log("true")
        } else{
            console.log("false")
        }

       // #9
        let a = 8;
        let b = 4;
        let c = 6;

        if(a % 2 == 1 || b % 2 == 1 || c % 2 == 1){
            console.log("true")
        } else{
            console.log("false")
        }

        // #10
        let custoProduto = 29;
        let valorDeVenda = 80;
        let imposto = (20 * custoProduto) / 100;
        let custoTotal = custoProduto + imposto;
        let lucro = (valorDeVenda - custoTotal) * 1000;

        if(custoProduto > 0 && valorDeVenda > 0){
            console.log("Lucro de: " + lucro)
        } else {
            console.log("Valores inseridos abaixo de zero")
        }

        // #11
let salarioBruto = 3000;
let impostoIr;
let impostoInss;
let salarioBase;
let salarioLiquido;

if(salarioBruto <= 1556.94){
    impostoInss = (8 * salarioBruto) / 100;
} else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    impostoInss = (9 * salarioBruto) / 100;
} else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    impostoInss = (11 * salarioBruto) / 100;
} else {
    impostoInss = 570.88;
}

salarioBase = salarioBruto - impostoInss;

if(salarioBruto <= 1903.98){
    impostoIr = 0;
} else if(salarioBase >= 1903.99 && salarioBase <= 2826.65){
    impostoIr = ((7.5 * salarioBase) / 100) - 142.80;
} else if(salarioBase >= 2826.66 && salarioBase <= 3751,05){
    impostoIr = ((15 * salarioBase) / 100) - 354.80;
} else if(salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    impostoIr = ((22.5 * salarioBase) / 100) - 636.13;
} else if(salarioBase > 4664.68){
    impostoIr = ((27.5 * salarioBase) / 100) - 869,36
}

salarioLiquido = salarioBase - impostoIr;
console.log("Salário líquido: " + salarioLiquido);



//         INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
//7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45