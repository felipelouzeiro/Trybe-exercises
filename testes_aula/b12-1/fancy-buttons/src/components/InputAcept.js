import { Component } from 'react';
import '../App.css';


class InputAcept extends Component {
  render() {
    const { checked, handleChange } = this.props;
      return(
        <div className="form-check">
        <input
          className="form-check-input" 
          type="checkbox" 
          id="gridCheck" 
          name='acept' 
          checked={ checked } 
          onChange={handleChange } 
      />
        <label className="form-check-label">
          Estou pronto(a)
        </label>
      </div>

    )
  }
}

  export default InputAcept;