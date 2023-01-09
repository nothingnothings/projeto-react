// import React from 'react';

// const userInput = (props) => {
//     const inputStyle = {
//         border: '2px solid red'
//     };

//     return <input 
//         type="text" 
//         style={inputStyle}
//         onChange={props.changed} 
//         value={props.currentName} />;
// };

// export default userInput;




import React from 'react';


const UserInput = (props) => {

    const inputStyle = 
    {
        border: '2px solid red'
    }


    return (
        
        <input 
        type="text" 
        value={props.name}
        style={inputStyle}
        onChange={props.changed}


        
        
        />
        
    )
}



export default UserInput;