
import * as actionsTypes from './actionsTypes';




export const inc_counter = () => {
  ///////ESTE É UM __aCTION CREATOR____ --> seu formato é assim:  'const nomeDoIdentifierDaAction = (payloadQueVocêQuer) => { return { actionEmSi... } };'
  return {
    type: actionsTypes.INC_COUNTER, //sim, esse é o IDENTIFIER QUE TEMOS LOGO ACIMA...
  };
};

export const dec_counter = () => {
  return {
    type: actionsTypes.DEC_COUNTER,
  };
};

export const add_counter = (value) => {
  return {
    type: actionsTypes.ADD_COUNTER,
    value: value,
  };
};

export const sub_counter = (value) => {
  return {
    type: actionsTypes.SUB_COUNTER,
    value: value,
  };
};
