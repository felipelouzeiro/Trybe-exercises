const gabarito = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const respostasEstudantes = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checaRespostas = (gabarito, respostasEstudantes) => {
  let pontuacao = 0;
  for (let indexGabarito in gabarito) {
    for (let indexRespostas in respostasEstudantes) {
      if (gabarito[indexGabarito] === gabarito[indexRespostas]) {
        pontuacao += 1;
      } else {
        pontuacao -= 0.5;
      }
    }
  }
  return pontuacao;
}

const resultado = (gabarito, respostasEstudantes, callback) => {
  return callback;
}
console.log(resultado(checaRespostas));