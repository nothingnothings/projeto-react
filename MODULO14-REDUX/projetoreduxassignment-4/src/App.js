import React, { Component } from "react";


import Persons from './containers/Persons';



class App extends Component {
  render() {
    return (
      <div className="App">
          <ol>
            <li>Turn this app into one which does NOT use local STATE (in components), but instead uses REDUX</li>
          </ol>
          <Persons />
      </div>
    )
  }
}



export default App;
