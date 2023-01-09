


import React, { Component } from 'react';


import Aux from '../../hoc/Auxiliary';

import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'


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



    sideDrawerOpenHandler = () => {
        this.setState({
            showSideDrawer: true
        })
        console.log('test');
    }




    sideDrawerCloseHandler = () => {
        this.setState({
            showSideDrawer: false
        })
        console.log('test');
    }







    render() {



        return(
            <Aux>
            {/* <div>Toolbar, SideDrawer, Backdrop</div> */}
            <Toolbar clicked={this.sideDrawerOpenHandler}/>
            <SideDrawer open={this.state.showSideDrawer} close={this.sideDrawerCloseHandler}/>
            <main className={LayoutStyle.Content}>
                {this.props.children}
            </main>
            </Aux>
        
        );
    
    }







}









export default Layout;