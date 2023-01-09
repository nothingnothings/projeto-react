import React, { Component } from 'react';

import ListStyle from './List.module.css';

import TransitionGroup from 'react-transition-group/TransitionGroup'; //// DEVE SER USADO COM '<CSSTransitionGroup />' PARA ___ ANIMAr__ LIST ITEMS ___, DENTRO DE LISTS, COM SUCESSO....

import CSSTransition from 'react-transition-group/CSSTransition';

class List extends Component {



    constructor( props ) {
        super( props );
    
        this.keyCount = 0;
        this.getKey = this.getKey.bind(this);
    }


    getKey(){
        return this.keyCount++;
    }





  state = {
    items: [1, 2, 3],
  };

  addItemHandler = () => {
    this.setState((prevState) => {
      return {
        items: prevState.items.concat(prevState.items.length + 1), ///essencialmente, 'concat 4', 'concat 5', sucessivamente...
      };
    });
  };

  removeItemHandler = (selIndex) => {
    this.setState((prevState) => {
      return {
        items: prevState.items.filter((item, index) => index !== selIndex),
      };
    });
  };

  render() {
    const listItems = this.state.items.map((item, index) => {
      //esse component DEVE ___ WRAPPAR __ O LISTitem/ListItems que __VOCÊ QUER _ QUE TENHA/TENHAM ANIMAÇÕES na sua list.... (animações que serão gerenciadas por '<ReactTransitionsGroup />'...)
      return (
        <CSSTransition
          mountOnEnter
          unmountOnExit
          key={index}
          timeout={800}
          classNames={{
            enter: ListStyle.ListItemEnter,
            enterActive: ListStyle.ListItemEnterActive,
            exit: ListStyle.ListItemExit,
            exitActive: ListStyle.ListItemExitActive,
          }}
        >
          <li
            // key={index}
            className={ListStyle.ListItem}
            onClick={() => this.removeItemHandler(index)}
          >
            {item}
          </li>
        </CSSTransition>
      );
    });
    return (
      <div>
        <button className={ListStyle.Button} onClick={this.addItemHandler}>
          Add Item
        </button>
        <p>Click item to Remove.</p>
        {/* <ul className={ListStyle.List}> // SE VOCÊ QUISER __ ANIMAR__ OS LISTITEM na sua LIST DINÂMICA, você deve substituir sua div comum de <ul> por '<TransitionGroup />', extraído do pacote de 'react-transition-group'... --> esse '<TransitionGroup />' DEVE __ WRAPPAR__ os listItems dinâmicos de seu aplicativo que você quer animar.... */}
        <TransitionGroup className={ListStyle.List}>
          {listItems}
        </TransitionGroup>
        {/* </ul> */}
      </div>
    );
  }
}

export default List;
