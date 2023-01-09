


import React, { Component } from 'react';


import Aux from '../Auxiliary/Auxiliary';

import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';


import Toolbar from '../../components/Navigation/Toolbar/Toolbar';


import LayoutStyle from './Layout.module.css';


// const layout = (props) => {



//     return(
//         [
//         <div>Toolbar, SideDrawer, Backdrop</div>,
//         <main>
//             {props.children}
//         </main>
//         ]
    
//     );





// }






// const layout = (props) => { //usamos um array como WORKAROUND DA LIMITAÇÃO DE 'ADJACENT JSX ELEMENTS'...



//     return(
//         <Aux>
//         {/* <div>Toolbar, SideDrawer, Backdrop</div> */}
//         <Toolbar/>
//         <SideDrawer />
//         <main className={LayoutStyle.Content}>
//             {props.children}
//         </main>
//         </Aux>
    
//     );





// }




class Layout extends Component { 



    state = {
        showSideDrawer: false
    }





    // sideDrawerOpenHandler = () => {  //escrito por mim, código não tão bom. Usar 'sideDrawerToggleHandler' codado pelo professor, com aquele approach CORRETO de updatar state quando o novo STATE DEPENDE DO VELHO STATE... (new state value depends on the old state value, thats when you use this approach.)
    //     this.setState({
    //         showSideDrawer: true
    //     })
    //     console.log('test');
    // }





    sideDrawerCloseHandler = () => { 
        this.setState({
            showSideDrawer: false
        })
        console.log('test');
    }


    // sideDrawerToggleHandler = () => {  
    //     this.setState({
    //         showSideDrawer: !this.state.showSideDrawer ///////SINTAXE '''RUIM''' DE 'setState()'..... --> LEVA A COMPORTAMENTOS INESPERADOS DEVIDO à NATUREZA __ASSÍNCRONA___ DO 'this.setState()'... -------> É POR ISSO QUE DEVEMOS USAR A SINTAXE QUE TEMOS LOGO ABAIXO, QUE É UMA SINTAXE QUE PREVINE ESSES COMPORTAMENTOS INESPERADOS E ERROS DE UPDATESTATE EM GERAL...
    //     })
    // }


    
  sideDrawerToggleHandler = () => {  

        this.setState(
            (prevState) => {  ///SINTAXE '''BOA'''/ÓPTIMA DO __UPDATE STATE___.... --> EVITA COMPORTAMENTOS INESPERADOS QUANDO ESTAMOS UPDATANDO O STATE...   ---> ESSA É __A MANEIRA _____ ''''CLEAN''''___  DE UPDATAR  O STATE __QUANDO O STATE __ NOVO DEPENDE ___ DO STATE VELHO (when the new state depends on the old state)...
                return {showSideDrawer: !prevState.showSideDrawer};
            }
        )
    }






    render() {



        return(
            <Aux>
            {/* <div>Toolbar, SideDrawer, Backdrop</div> */}
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
            <SideDrawer closed={this.sideDrawerCloseHandler} open={this.state.showSideDrawer} />
            <main className={LayoutStyle.Content}>
                {this.props.children}
            </main>
            </Aux>
        
        );
    
    }







}









export default Layout;