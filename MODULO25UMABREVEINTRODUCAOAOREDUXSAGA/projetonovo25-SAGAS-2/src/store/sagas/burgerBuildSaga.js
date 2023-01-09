import { put } from 'redux-saga/effects'; //USADO PARA FAZER _dISPATCH__ DE ACTIONS com o 'sagas', nesse arquivo nosso....

import axios from 'axios';

import * as actionTypes from '../actions/burgerBuild';





export function* asyncOrderInitialIngredientsGetSaga() {
  try {
    const response = yield axios.get(
      'https://burgerbuilder201051-default-rtdb.firebaseio.com/ingredients.json'
    );
        console.log(response);
    const ingredients = yield response.data;
    yield put(actionTypes.orderInitialIngredientsGet(ingredients));
  } catch (error) {
    console.log(error);
    yield put(actionTypes.fetchIngredientsFailed());
  }
}
