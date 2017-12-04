import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './assets/styles/bootstrap-reboot.css';
import './assets/styles/main.css';

import Header from './components/3-organisms/Header';
import ListItems from './components/3-organisms/ListItems';
import ProductDetail from './components/3-organisms/ProductDetail';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="page">
            <Header/>
          </div>
          <main>
            <Route exact={true} path="/" render={() => (
              <h3>Teste Prático - Frontend | Ricardo Saldanha Reis</h3>
            )}/>
            <Route exact={true} path="/items" component={ListItems}/>
            <Route path="/item/:id" component={ProductDetail}/>
          </main>
        </div>
      </Router>
      );
  }
}

export default App;
