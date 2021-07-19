import { Component } from 'react';
import '../App.css';


class InputElement extends Component {
  render() {
    const { value, handleChange } = this.props;
    return(
      <select className="custom-select" id="inputGroupSelect01" name='element' value={ value } onChange={handleChange }>
      <option defaultValue>Escolha seu elemento</option>
      <option value="Àgua">Àgua</option>
      <option value="Energia">Energia</option>
      <option value="Ar">Ar</option>
      <option value="Psíquico">Psíquico</option>
      <option value="Terra">Terra</option>
    </select>
    )
  }
}

  export default InputElement;