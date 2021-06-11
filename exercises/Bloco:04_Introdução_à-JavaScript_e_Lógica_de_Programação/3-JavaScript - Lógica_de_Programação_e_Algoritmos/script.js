// 1
let n = 5;
let linhaAst = " ";

let Ast = "*";
 for(let index = 0; index < n; index += 1){
     linhaAst += Ast;
}

for(let indexlinha = 0; indexlinha < n; indexlinha += 1){
    console.log(linhaAst)
};

//2
let n = 5;
let linhaAst = " ";
let Ast = "*";

 for(let index = 0; index <= n; index += 1){
     console.log(linhaAst);
     linhaAst += Ast;
};

//3
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



//4


