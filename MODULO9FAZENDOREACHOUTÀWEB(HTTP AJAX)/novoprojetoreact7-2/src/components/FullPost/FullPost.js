import React, { Component } from 'react';

import axios from 'axios';

import FullPostStyle from './FullPost.module.css';

class FullPost extends Component {
  state = {
    loadedPost: null,
    deletedPost: false
  };

  // componentDidUpdate(prevState) {
  //   if (this.props.id) {
  //     axios
  //       .get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
  //       .then((response) => {
  //         console.log(response);
  //         if(prevState.loadedPost !== this.state.loadedPost) { ///////////ESTE CHECK ESTÁ ERRADO. ERA PARA ELE PREVENIR LOOPS INFINITOS EM DECORRÊNCIA DE CHAMAR 'this.setState()' DENTRO DE 'componentDidUpdate'... --> MAS ISSO NÃO FUNCIONA. ESSE APPROACH NÃO FUNCIONA, NÓS CONTINUAMOS COM UM MEMORY LEAK FODIDO; SÃO CRIADOS INCONTÁVEIS HTTP REQUESTS QUANDO CLICAMOS EM ALGUM DOS 'POSTS' da página , o que é terrível. Veja o approach do professor, mostrado logo abaixo, QUE RESOLVE ESSA QUESTÃO DO MEMORY LEAK e do loop infinito da execução de  'this.setState' e 'componentDidUpdate'
  //         this.setState({
  //           loadedPost: response.data,
  //         });
  //       }
  //       });
  //   }
  // }

      constructor(props) {
        super(props);
        this.myRef = React.createRef();
      }







      deletePostHandler = (id) => {

          console.log(id);

            axios.delete('/posts/' + this.props.id)
            .then(



              (response) => {
                console.log(response);

                

               
              }
         

            
            )


            this.setState({
              deletedPost: true
            })



      }







   





  componentDidUpdate() {
    if (this.props.id) { ///sim, aqui escreveremos UM IF CHECK DENTRO DE OUTRO IF CHECK- ----> faremos isso para EVITAR O LOOP INFINITO de execução de 'this.setState()' e 'componentDidUpdate', que é um problema na interação de nosso código que CAUSA O SEND INFINITO DE HTTP REQUESTS...

      if( !this.state.loadedPost || (this.state.loadedPost && this.props.id !== this.state.loadedPost.id)) {


        axios.get('/posts/' + this.props.id)
        .then((response) => {
          console.log(response);
          this.setState({
            loadedPost: response.data,
            deletedPost: false
          }
          );
        }
        );
      }
      return;

    }
  }















  render() {
    // return this.props.id

    //     ?

    //     (
    //         <div className={FullPostStyle.FullPost}>
    //             <h1>{this.state.loadedPost.title}</h1>
    //             <p>{this.state.loadedPost.body}</p>
    //             <div className={FullPostStyle.Edit}>
    //                 <button className={FullPostStyle.Delete}>Delete</button>
    //             </div>
    //         </div>

    //     )

    //     :

    // <p style={
    //     {
    //         textAlign: "center"
    //     }
    // }>Please select a Post!</p>







    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;


    



    if (this.props.id) {
      post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
    }

    if (this.state.loadedPost) {
      post = (
        <div className={FullPostStyle.FullPost}>
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className={FullPostStyle.Edit}>
            <button className={FullPostStyle.Delete} 
                    
            onClick={() => {this.deletePostHandler(this.props.id);
                          
            
                            
          
          }}
            
          >Delete</button>
          </div>
        </div>
      );
    }

    if (this.state.deletedPost) {
      post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;


 
    }




    return post;
  }
}

//title

//content

export default FullPost;
