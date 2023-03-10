import axios from 'axios';
import React, { Component } from 'react';

import NewPostStyle from './NewPost.module.css';

class NewPost extends Component {





  // newPostSendHandler = () => {
  //   	    axios.post('https://jsonplaceholder.typicode.com/posts', {

  //         })
  //         .then(

  //         )
  // }




  postDataHandler = () => {
            const post = {
              "title": this.state.title,
              "content": this.state.content, 
              "author": this.state.author
            }

         
            axios.post('/posts', post)
          .then( 



            response => {
              console.log(post);
              alert('POST Sent!');
              console.log(response);
            }
             


          
              
          )
        


    	
  }















  state = {
    title: '',
    content: '',
    author: 'Max',
  };

  render() {
    return (
      <div className={NewPostStyle.NewPost}>
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={(event) => this.setState({ author: event.target.value })}
        >
          <option value="Max">Max</option>
          <option value="Manu">Manu</option>
        </select>
        <button onClick={this.postDataHandler}>Add Post</button>
      </div>
    );
  }
}




export default NewPost;