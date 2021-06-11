// ADICIONANDO NOVAS CHAVES

// Agora, para praticar, crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

let funcao = (objeto, chave, valor) => {
objeto = {};
// let newChave = chave;
// let newValor = valor;


objeto[chave] = valor;
console.log(objeto);
} 
return funcao('animal', 'especie', 'gato');


// OBJECT.KEYS()
// Ex1:
 let lista = {
   doce: 'chocolate',
   salgado: 'coxinha',
 };

 console.log(lista);
 console.log(Object.keys(lista));

// Ex2:
let array = ['doce', 'salgado', 'azedo'];
console.log(array);
console.log(Object.keys(array));


// Tente criar uma função que exiba as habilidades do objeto student . Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade". Após tentar criar a função, veja a sugestão de resposta logo abaixo e compare com a sua solução.

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const ficha = (student) => {
let allStudents = Object.keys(student);
for (index in allStudents) {
  console.log(`${allStudents[index]}, Nível: ${student[allStudents[index]]}`)
}
}
ficha(student1);
console.log('student1');

ficha(student2);
console.log('student2');


// OBJECT.VALUES
const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

const listSkillsValuesWithValues = (student) => Object.values(student);
console.log(listSkillsValuesWithValues(student));


// OBJECT.ENTRIES
const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);

// Para imprimir os valores separados:
for(index in pairKeyValue) {
  console.log('--------');
  console.log('País:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};


// OBJECT.ASSIGN

const person = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName);
newPerson.name = 'Gilberto';
newPerson.signo = 'peixes';
console.log(newPerson); // copiando o conteudo para um objeto vazio {}, os objetos originais não sofrem alteração.
console.log(person);
console.log(lastName);