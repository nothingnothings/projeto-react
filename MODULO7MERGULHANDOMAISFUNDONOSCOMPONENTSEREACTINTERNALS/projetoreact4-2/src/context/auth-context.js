import React from 'react';





const authContext = React.createContext({

    authenticated: false,
    login: () => {} //////////////////ESSE VALOR DE '() => {}' É USADO __PARA __ QUE VOCê CONSIGA UM MELHOR 'AUTO-COMPLETION' POR PARTE DO IDE __NOS LUGARES DO CÓDIGO EM QUE __ VOCÊ UTILIZAR ESSE OBJETO 'context'...
});










export default authContext;