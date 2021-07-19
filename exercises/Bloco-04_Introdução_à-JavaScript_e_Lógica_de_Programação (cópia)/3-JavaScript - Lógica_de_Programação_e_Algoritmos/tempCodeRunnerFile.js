
//4
let n = 5;
let Ast = '*';
let space = "";
let posicao = n;

for (let linhaIndex = 0; linhaIndex < n; linhaIndex += 1) {
  for (let colunaIndex = 0; colunaIndex <= n; colunaIndex += 1) {
    if (colunaIndex < posicao) {
      space += ' ';
    } else {
      space += Ast;
    }
  }
  console.log(space);
  space = '';
  posicao -= 1;
};

