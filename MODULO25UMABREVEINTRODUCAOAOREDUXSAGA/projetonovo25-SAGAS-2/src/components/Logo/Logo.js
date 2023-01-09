import React from 'react';




import burgerLogo from '../../../src/assets/images/burger-logo.png'



import BurgerLogoStyle from './Logo.module.css';



const logo = (props) => {


    return <div className={BurgerLogoStyle.Logo} 
    
    // style={
    //     {
    //         height: props.height
    //     }
    // }

    
    
    >
            <img src={burgerLogo} alt="MyBurger" />
    </div>

};









export default logo;



