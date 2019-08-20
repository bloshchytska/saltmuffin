import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom';
import './App.scss';
import Welcome from './views/Welcome/Welcome';
import Contact from './views/Contact/Contact';
import Space from "./views/Space/Space";
import Salt from "./views/Salt/Salt";

class App extends Component {
  render() {

    return (
        <div>
            <HashRouter basename="/">
                <Route exact path="/"  component={ Welcome }/>
                <Route path="/contact"  component={ Contact }/>
                <Route path="/space"  component={ Space }/>
                <Route path="/salt"  component={ Salt }/>
            </HashRouter>
        </div>
    );
  }
}


export default App;
