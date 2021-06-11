
const person = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName);
newPerson.name = 'Gilberto';
newPerson.signo = 'peixes';
console.log(newPerson);
console.log(person);
console.log(lastName);