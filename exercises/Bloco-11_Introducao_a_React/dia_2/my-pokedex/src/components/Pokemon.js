import React, {Component} from 'react';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return(
      <section id='pokemon'>
        <div>
          <p>Nome: {name}</p>
          <p>Tipo: {type}</p>
          <p>Peso médio: {averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
        <div><img src={image} alt={name} /></div>
      </section>
    )
  }
}

export default Pokemon;

