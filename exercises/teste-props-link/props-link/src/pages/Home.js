import '../App.css';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

const arr = [2, 4, 5, 2]
const str = 'string qualquer';

class Home extends Component {
  render() {
    return (
      <>
      <h3>Estamos em Home</h3>
      <Link to={{pathname: "/Details", state: {arr, str} }}>
        Details
      </Link>
      </>
    );
  }
}

export default Home;
