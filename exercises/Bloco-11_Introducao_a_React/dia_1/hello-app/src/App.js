import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const array = ['acordar', 'despertar', 'abstrair', 'refletir', 'criar', 'executar']

class App extends React.Component {
render() {  
    return <ul>{array.map((item) => Task(item))}</ul>
    }
}

export default App;


// Crie uma lista de tarefas simples que:
// Utilize a função Task dentro do componente App .
// Leia as tarefas de dentro de um Array.
// Use a função map para criar cada item da lista no HTML.