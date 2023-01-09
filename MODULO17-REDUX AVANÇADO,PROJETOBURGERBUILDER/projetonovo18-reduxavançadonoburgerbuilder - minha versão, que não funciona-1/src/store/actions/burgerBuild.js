import * as actionTypes from './burgerActionTypes';











export const ingredient_add = (ingredientId) => {
        return {
            type: actionTypes.INGREDIENT_ADD,
                    ingredientName: ingredientId
        };
};




export const ingredient_remove = (ingredientId) => {
        return {
            type: actionTypes.INGREDIENT_REMOVE,
            ingredientName: ingredientId
        }
}