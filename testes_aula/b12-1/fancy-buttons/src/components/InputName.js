import { Component } from 'react';
import '../App.css';


class InputName extends Component {
  render() {
    const { value, handleChange } = this.props;
    return(
      <input 
      type="text" 
      className="form-control" 
      placeholder="Digite seu nome" 
      name='name' 
      value={ value } 
      onChange={ handleChange } 
    />
    )
  }
}

  export default InputName;