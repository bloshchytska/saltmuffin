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
            <Route exact path={process.env.PUBLIC_URL + '/'} component={ Welcome }/>
            <Route path={process.env.PUBLIC_URL + '/contact'} component={ Contact }/>
            <Route component={() => (<div>404 Not found </div>)} />
          </Switch>
        </div>
    );
  }
}


export default App;
