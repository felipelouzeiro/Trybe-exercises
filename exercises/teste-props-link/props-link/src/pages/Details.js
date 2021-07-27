import '../App.css';
import { Link } from 'react-router-dom';
import React,{ Component } from 'react';
import PropTypes from 'prop-types';

class  Details extends Component {
  render() {
    const { location: { state: { arr, str } } } = this.props;
    const { arr2 } = this.props;
    console.log(arr, str)

    return (
      <>
      <h3>Estamos em Details</h3>
        <Link to='/'>
          Home
        </Link>
        <p>{ arr }</p>
        <p>{ arr2 }</p>
        <p>{ str }</p>
      </>
    );
  }
}

Details.propTypes = {
  arr: PropTypes.number.isRequired,
}

export default Details;
