import React, { Component } from 'react';
import { connect } from 'react-redux'; ///ESSENCIAL PARA PODER USAR A FEATURE DO 'REDUX'... --> deve-se sempre importar esse objeto/função/hoc/pacote NO CONTAINER EM QUE VOCÊ PLANEJA USAR O STATE DO REDUX/STATE ARMAZENADO NO 'CENTRAL STORE' do redux....

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actionTypes from '../../store/actions'


class Counter extends Component {
  state = {
    counter: 0,
  };

  // counterChangedHandler = (action, value) => { ////////CÓDIGO ANTIGO (sem o redux).
  //   switch (action) {
  //     case 'inc':
  //       this.setState((prevState) => {
  //         return { counter: prevState.counter + 1 };
  //       });
  //       break;
  //     case 'dec':
  //       this.setState((prevState) => {
  //         return { counter: prevState.counter - 1 };
  //       });
  //       break;
  //     case 'add':
  //       this.setState((prevState) => {
  //         return { counter: prevState.counter + value };
  //       });
  //       break;
  //     case 'sub':
  //       this.setState((prevState) => {
  //         return { counter: prevState.counter - value };
  //       });
  //       break;

  //     default:
  //       return;
  //   }
  // };

  render() {
    return (
      <div>
        {/* <CounterOutput value={this.state.counter} />  //////////USO INTERNO DE 'STATE'. COISA COMUM... (ver código logo abaixo, que é a mesma coisa, MAS __UTILIZANDO O STATE GLOBAL DE 'REDUX', que é armazenado no seu 'CENTRAL STORE'...*/}
        <CounterOutput value={this.props.ctr} /> 
        {/* <CounterControl 
          label="Increment"
          clicked={() => this.counterChangedHandler('inc')} //////////SINTAXE ''ANTIGA''...
        /> */}
                                  {/* vvvvvvv ------> SINTAXE DE USO DAS 'ACTIONS' do redux.... ---------> aqui, estamos usando A PROPRIEDADE/MÉTODO 'onIncrementCounter', definida LÁ NAQUELE 'mapDispatchToProps', naquele return daquele objeto javascript, return interno... */}
            <CounterControl 
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        {/*                 ^^^^^^^--------> SIM, É EXATAMENTE ESTA A SINTAXE A SER UTILIZADA.... devemos chamar 'this.nomeDaPropriedadeNoReturnDeMapDispatchToProps'... ----> e devemos chamar SEM EXECUTAR, ou seja, sem escrever assim: 'this.onIncrementCounter()'... ------> ISSO ESTÁ ERRADO. -------> forma correta: 'this.onIncrementCounter'.... */}
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl
          label="Add 10"
          clicked={this.props.onAddCounter}
        />
        <CounterControl
          label="Subtract 10"
          clicked={this.props.onSubtractCounter}
        />
        <hr></hr>
        <button onClick={() => {this.props.onResultStored(this.props.ctr)}}>Store Result</button>
        <ul style={
          {
            listStyle: 'none'
          }
        }>
          {this.props.storedResults.map((result) => {
                 return (
                   <li id={result.resultId} key={result.resultId} onClick={() => {this.props.onDeleteResult(result.resultId)}}>{result.value}</li>)
            }
          )}
        </ul>
      </div>
    );
  }
}
/////OBS: LEMBRE-SE QUE ___TODO <li> renderizado no REACT tem que ter uma prop de 'key'...

const mapDispatchToProps = dispatch => { ///////////DEVE SER SEGUIDO ESTE FORMATO.... -------> (sempre usar 'dispatch' como PARÂMETRO DESSA FUNÇÃO... ex: 'const mapDispatchToProps = dispatch => { return ...}' ...)
  return {
      onIncrementCounter: () => {
        
        dispatch(
        {
            type: actionTypes.INC_COUNTER
        }
      )
      },
      onDecrementCounter: () => {
        dispatch({
          type: actionTypes.DEC_COUNTER
        })
      },
      onAddCounter: () => {
        dispatch({
          type: actionTypes.ADD_COUNTER,
          value: 10
        })
      },
      onSubtractCounter: () => {
        dispatch({
          type: actionTypes.SUB_COUNTER,
          value: 10
        })
      },
      onResultStored: (result) => {
        dispatch(
          {
            type: actionTypes.RESULT_STORE,
            result: result

          }
        )
      },
      onDeleteResult: (id) => {
        dispatch(
          {
            type: actionTypes.DELETE_RESULT,
            resultId: id
          }
        )
      }
  }
}




const mapStateToProps = state => { ///////obs:::: é sempre 'const mapStateToProps', e nunca 'mapStateToProps = () => {}' (PQ ISSO AÍ NÃO É UM MÉTODO, E SIM UMA '''''CONSTANTE __ QUE SEGURA __ UMA FUNÇÃO QUE RETORNA UM OBJETO com 'prop names'... '''')
        return {
            ctr: state.counter.counter,
            storedResults: state.results.results           //  'state'              +                                 '.counter/ctr'                                                +                  .counter;  ------> isso vira exatamente 'ctr: state.counter.counter', como visto nessa linha....
                                                          //  (O GLOBAL STATE, EM QUESTÃO)            (isso é o SUBSTATE/slice do globalstate DEFINIDO LÁ EM 'combineReducers'...)
          
        }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter); /////////SIM, A SINTAXE É ESSA MESMA...
