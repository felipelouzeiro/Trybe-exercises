import { Component } from 'react';
import '../App.css';


class InputSurname extends Component {
  render() {
    const { value, handleChange } = this.props;
    return(
      <input
        type="text" 
        className="form-control" 
        placeholder="Digite seu sobrenome" 
        name='surname' 
        value={ value } 
        onChange={handleChange } 
      />
    )
  }
}

  export default InputSurname;