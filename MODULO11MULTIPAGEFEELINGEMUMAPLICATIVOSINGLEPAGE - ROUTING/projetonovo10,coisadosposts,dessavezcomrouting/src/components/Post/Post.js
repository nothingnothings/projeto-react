import React from 'react';

import './Post.css';


import { withRouter } from 'react-router-dom';

const post = (props) => {
    // console.log(props);
    return (

    <article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
    );

    }

export default withRouter(post);  /////////ESSE É O SEGUNDO APPROACH PARA ADICIONAR 'ROUTING-RELATED PROPS' a um determinado component (props típicos de routing = 'match', 'history', 'location', etc...)