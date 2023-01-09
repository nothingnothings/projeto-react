import React from 'react';




import userIconPng from '../../../src/assets/images/userIcon.png'



import UserIconStyle from './UserIcon.module.css';



const userIcon = (props) => {


    return <div className={UserIconStyle.Logo} 
    
    // style={
    //     {
    //         height: props.height
    //     }
    // }

    
    
    >
            <img src={userIconPng} alt="UserIcon" />
            
    </div>

};









export default userIcon;



