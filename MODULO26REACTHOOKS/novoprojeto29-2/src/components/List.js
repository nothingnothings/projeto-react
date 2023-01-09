
import React from 'react';



const list = (props) => {
    console.log('Rendering the List....')
    return <ul>

        
         {props.items.map(todo => (/////EIS O CÓDIGO EM QUESTÃO.
          <li key={todo.id} onClick={props.clicked.bind(this, todo.id)} style={{listStyle: 'none'}}>
            {todo.name}
          </li>
        ))}

    </ul>
}




export default list;

