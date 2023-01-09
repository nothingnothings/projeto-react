

import React, { Component } from 'react';



import Post from '../../components/Post/Post';

import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';


import BlogStyle from './Blog.module.css';


// import axios from 'axios';


import axiosinstance from '../../axios';



class Blog extends Component {


        state = {
            posts: [

            ],
            selectedPostId: null
        }









    // async componentDidMount() {
        
    //         const response = await axios.get(
    //             'https://jsonplaceholder.typicode.com/posts'
    //           );
    //             const listOfPosts = response.data;
    //             console.log(listOfPosts);
        

    //     }
       


        postSelectedHandler = (id) => {
            this.setState(
                {
                    selectedPostId: id
                }
            )
        }





        

    // componentDidMount () {
    //     axios.get('https://jsonplaceholder.typicode.com/postssssssssssss')
    //     .then(


    //         (response) => {
    //                 const posts = response.data.slice(0, 4);
    //                 const updatedPosts = posts.map(post => {
    //                     return {
    //                         ...post,
    //                         author: 'Max' //propriedade EDITADA/ADICIONADA ao nosso 'response'/post OBTIDO PELO USO DO 'AXIOS'...
    //                     }
    //                 });
    //             // this.setState({
    //             //     posts: response.data
    //             // })
                
                    
    //              this.setState({
    //                 posts: updatedPosts
    //             })
            
    //         }
    //     )
    //     .catch(
    //         error => {
    //             console.log(error);
    //         }
    //     )
        
    // }
    





    componentDidMount () {
        axiosinstance.get('/posts')
        .then(


            (response) => {
                    const posts = response.data.slice(0, 4);
                    const updatedPosts = posts.map(post => {
                        return {
                            ...post,
                            author: 'Max' //propriedade EDITADA/ADICIONADA ao nosso 'response'/post OBTIDO PELO USO DO 'AXIOS'...
                        }
                    });
                // this.setState({
                //     posts: response.data
                // })
                
                    
                 this.setState({
                    posts: updatedPosts
                })
            
            }
        )

        
    }






















    render () {
            let posts = <p style={{textAlign: 'center'}}>Something went Wrong!</p>
            if(!this.state.error){
                posts = this.state.posts.map( 
                    (post) => {
                        return <Post title={post.title} 
                        body={post.body} 
                        key={post.id} 
                        author={post.author} 
                        clicked={() => this.postSelectedHandler(post.id)}
                     />
                    }
                )
            }
            

    



        console.log(this.state.posts)
        return (
            <div>
                <section className={BlogStyle.Posts}>
                    {/* <Post />
                    <Post />
                    <Post /> */}
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        )

    }
}




export default Blog;