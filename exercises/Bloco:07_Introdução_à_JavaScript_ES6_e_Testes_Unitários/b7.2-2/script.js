const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// const adcTurno = (objeto, chave, valor) => {
//   objeto[chave] = valor;
//   console.log(lesson2);
// };

// return adcTurno(lesson2, 'turno', 'manhã');

const listKeys = (objeto) => Object.keys(objeto);
console.log(listKeys(lesson1));

const objectSize = (objeto) => Object.keys(objeto).length;
console.log(objectSize(lesson3));

const listValues = (objeto) => Object.values(objeto);
console.log(listValues(lesson1));

const allLessons = Object.assign({}, [lesson1, lesson2, lesson3]); //tá errado isso aqui
console.log(allLessons);

// 1.Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
// 2.Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
// 3.Crie uma função para mostrar o tamanho de um objeto.
// 4.Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
// 5.Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const numberStudents = (objeto) => {
  let keys = Object.keys(objeto);
  let number = 0;
  for (index in keys) {
    number += objeto[keys[index]].numeroEstudantes;
  }
  return `Ao todo são ${number} alunos.`;
};
console.log(numberStudents(allLessons));

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
// console.log(getValueByNumber(lesson1, 0));
// // Output: 'Matématica'
const getValue = (objeto, value) => Object.values(objeto)[value];
console.log(getValue(lesson2, 0));

// // Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
const verifyPair = (objeto, chave, valor) => {
  let check = 'Propriedade não encontrada!';
  const conteudo = Object.entries(objeto);
  for (index in conteudo) {
    if (conteudo[index][0] === chave && conteudo[index][1] === valor){
      check = 'Propriedade encontrada!';
    }
  }
  return check;
}
console.log(verifyPair(lesson3, 'professor', 'Maria Clara'));
// console.log(verifyPair(lesson3, 'turno', 'noite'));
// // Output: true,
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// // Output: false

// Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
const mathStudents = (objeto) => {
  let number = 0;
  const classrom = Object.keys(objeto);
  for (index in classrom) {
    if (objeto[classrom[index]].materia == 'Matemática') {
      number += objeto[classrom[index]].numeroEstudantes;
    }
  }
  return number;
}
console.log(mathStudents(allLessons));
// Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5: