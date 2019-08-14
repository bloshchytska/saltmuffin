import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Welcome from './views/Welcome/Welcome';
import Contact from './views/Contact/Contact';

class App extends Component {
  render() {
    return (
        <div>
          <Switch>
            <Route exact path="/" component={ Welcome }/>
            <Route path="/contact" component={ Contact }/>
          </Switch>
        </div>
    );
  }
}

export default App;
