import React from 'react';






import PostStyle from './Post.module.css';







const post = (props) => {
    
    return (
    
    <article className={PostStyle.Post} onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className={PostStyle.Author}>
                {props.body}
                &nbsp;
                &nbsp;
                <hr></hr>
                {props.author}
            </div>
        </div>
    </article>
   
    
    )
}



export default post;