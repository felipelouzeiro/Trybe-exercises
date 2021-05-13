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
