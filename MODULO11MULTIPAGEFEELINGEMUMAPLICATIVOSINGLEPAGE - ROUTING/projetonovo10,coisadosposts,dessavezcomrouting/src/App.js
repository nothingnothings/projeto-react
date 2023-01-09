import React, { Component } from 'react';

import { BrowserRouter } from 'react-router-dom'; ////código usado EM SPAs ---> introduz o ROUTING no seu código, nas partes do código wrappadas por esse objeto 'BrowserRouter'...


import Blog from './containers/Blog/Blog';



class App extends Component {
  render() {
    return ( <BrowserRouter>
      <div className="App">
        <Blog />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
