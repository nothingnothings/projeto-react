import React, { Component } from 'react';

import { BrowserRouter } from 'react-router-dom';

import { Route } from 'react-router-dom';

import  { Link } from 'react-router-dom';

import Users from './containers/Users';

// import Pizza from './containers/Pizza';

import asyncComponent from './hoc/AsyncComponent/AsyncComponent';

const AsyncPizza = asyncComponent(() => {
  return import('../src/containers/Pizza');
});

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">Users</Link> | <Link to="/pizza">Pizza</Link>
        </div>
        <div>
          <Route path="/" exact component={Users} />
          <Route path="/pizza" component={AsyncPizza} />
        </div>
      </div>
    );
  }
}

export default App;
