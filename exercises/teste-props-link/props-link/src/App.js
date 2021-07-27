import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';

const arr2 = [3, 4, 5, 6];

class App extends Component {
  render() {

    return (
     <Router>
       <Switch>
         <Route exact path='/' component={ Home } />
         <Route exact path='/Details' render={(props) => <Details {...props}
         arr2={arr2}
         /> } 
        />
       </Switch>
     </Router>
    );
  }
}

export default App;
