export {
    ingredient_add,
    ingredient_remove,
    asyncOrderInitialIngredientsGet
} from './burgerBuild';







export {
    // orderPost
    purchaseBurgerAttempt,
    purchaseBurgerLoading,

    asyncFetchOrdersStart,
    fetchOrdersFail,
    fetchOrdersStart,
    fetchOrdersSuccess

    // asyncFetchBurgerOrders //antigo approach nosso de conseguir fazer 'fetch' das ORDERS no servidor...




    //purchaseInit /////approach do PROFESSOR de redirect do usuário depois da execução de actions, nas nossas páginas...
    // purchaseBurgerSuccess,
    // purchaseBurgerFail

} from './order';





export {
    authAttempt,
    authLogout,
    burgerCreate,
    burgerFinished

} from './auth';