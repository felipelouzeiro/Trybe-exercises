import InputName from './components/InputName';
import InputSurname from './components/InputSurname';
import InputElement from './components/InputElement';
import InputJustification from './components/InputJustification';
import InputAcept from './components/InputAcept';
import { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super()
    
    this.state = {
      // numeroDeClicksbtn1: 0,
      // numeroDeClicksbtn2: 0,
      // numeroDeClicksbtn3: 0,
      name: '',
      surname: '',
      justification: '',
      element: '',
      acept: false,
    };

    // this.saudacoes = this.saudacoes.bind(this)
    // this.belezinha = this.belezinha.bind(this)
    // this.tchau = this.tchau.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
//Funções dos botões que exibem a quantidade de clicks
  // saudacoes() {
  //   this.setState((estadoAnterior, props) => ({
  //     numeroDeClicksbtn1: estadoAnterior.numeroDeClicksbtn1 + 1
  //   }));
  //   // console.log('hello kiridi', this);
  // }
  // belezinha() {
  //   this.setState((estadoAnterior, props) => ({
  //     numeroDeClicksbtn2: estadoAnterior.numeroDeClicksbtn2 + 1
  //   }))
  //   // console.log('eae blz?', this);
  // }
  // tchau() {
  //   this.setState((estadoAnterior, props) => ({
  //     numeroDeClicksbtn3: estadoAnterior.numeroDeClicksbtn3 + 1
  //   }))
  //   // console.log('tchauzinho', this);
  // }
  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (

      <section>
        {/* <div> //Botoes que mostram a quantidade de cliques:
          <input type='text' onChange={ (event) => console.log(event.target.value) }/>
          <button onClick={this.saudacoes}>Botão 1 - {this.state.numeroDeClicksbtn1} cliques</button>
          <button onClick={this.belezinha}>Botão 2 - {this.state.numeroDeClicksbtn2} cliques</button>
          <button onClick={this.tchau}>Botão 3 - {this.state.numeroDeClicksbtn3} cliques</button>
        </div> */}
          <h1 className='title'>Formulário de habilidades </h1>

          <form className='form'>
          <fieldset className='margin'>
            <legend className='legend'>Informações pessoais</legend>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">Nome</span>
              </div>
              <InputName value={this.state.name} handleChange={this.handleChange} /> {/*passando o valor e a função para o componente filho por meio de props*/}
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">Sobrenome</span>
              </div>
              <InputSurname value={this.state.surname} handleChange={this.handleChange} />
            </div>

          </fieldset>

          <fieldset className='margin'>
            <legend className='legend'>Informações sobre habilidades</legend>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <label className="input-group-text">Elementos</label>
              </div>
              <InputElement value={this.state.element} handleChange={this.handleChange} />
            </div>
            
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Justifique sua escolha</span>
              </div>
              <InputJustification value={this.state.justification} handleChange={this.handleChange} />
            </div>
            <div className="form-group mb-3">
              <InputAcept checked={this.state.acept} handleChange={this.handleChange} />
            </div>
            <div className="form-group mb-3">
              <input type="file" /> {/*input do tipo file é um componente do tipo não controlado*/}
            </div>

          </fieldset>
          </form>
      </section>
    ) 
  }
}

export default App;

// 1 - Crie um formulário com um campo select , dois inputs de tipo diferente, uma textarea e faça de um deles um componente controlado, ou seja, elementos do formulário controlados pelo Estado
// 2 - Baixe a React Developer Tools e veja, nela, o dado inserido no elemento controlado sendo salvo no Estado.