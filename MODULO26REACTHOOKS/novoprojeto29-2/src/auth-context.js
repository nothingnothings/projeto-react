import React from 'react';

// const authContext = React.createContext(false);  ////versão _BÁSICA __ de como usar arquivos 'context.js' para SETTAR/INICIALIZAR o valor de seus contexts... (OBS: essa versão aqui NÃO TE DÁ UM AUTO-COMPLETION TÃO BOM COM SEU IDE...)

const authContext = React.createContext({status: false, login: () => {}});  ///MESMA COISA DE CIMA, mas essa 'inicialização' TE __DÁ UM MELHOR 'AUTO-COMPLETE' com o IDE, pq o '''''esqueleto'''' (cujo valor será substituído pelo valor do prop de 'value' lá em '<AuthContext.Provider />')  É MAIS BEM DEFINIDO, AQUI...


export default authContext;