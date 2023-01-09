import React from 'react';



import CounterControlStyle from '../CounterControl/CounterControl.module.css' ////////ESSA É A VERSÃO DE 'IMPORT DE CSS MODULE' que __FUNCIONA__ COM O 'REACT REDUX' (única versão que eu testei que funciona com o react redux... react redux + css modules = problemas, muda a sintaxe de imports, aparentemente...)
///isso aqui (o IDE) DIZ QUE ESSE OBJETO NÃO FOI UTILIZADO, MAS É MENTIRA.... (ele foi utilizado, sim, foi referenciado mais abaixo...)




const counterControl = (props) => {
    // ESSA SINTAXE DE IMPORTS logo abaixo ('CounterControl', uma STRING aí) VAI FUNCIONAR
    return (<div className="CounterControl" onClick={props.clicked}> 
        {props.label}
    </div>)
};




export default counterControl;