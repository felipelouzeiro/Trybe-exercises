import { Component } from 'react';
import '../App.css';


class InputJustification extends Component {
  render() {
    const { value, handleChange } = this.props;
    return(
      <textarea
      className="form-control" 
      placeholder="Justifique sua escolha" 
      aria-label="Com textarea" 
      name='justification' 
      value={ value } 
      onChange={handleChange } 
     />
    )
  }
}

  export default InputJustification;