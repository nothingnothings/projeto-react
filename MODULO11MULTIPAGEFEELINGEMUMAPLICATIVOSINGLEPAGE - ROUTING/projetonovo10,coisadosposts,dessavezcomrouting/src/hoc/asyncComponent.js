import React, { Component } from 'react';



const asyncComponent = (importComponent) => {



    return class extends Component {
        state = {
            component: null
        }
    

        componentDidMount() {
                    importComponent()
                    .then(


                        cmp => {
                            this.setState({
                                    component: cmp.default
                            })
                        }
                    )
        }


    render() {
        const C = this.state.component;


        return this.state.component ? <C {...this.props} /> : null;
    }

}
}



export default asyncComponent;





//////OBS: ISSO TUDO É O FORMATO/PADRÃO QUE VOCê DEVE ESCREVER PARA __PODER CARREGAR ALGO (pode ser uma página/container/component qualquer, algo que vocÊ acha que os usuários comuns de sua página não usarão tanto.... o lazy loading é muito utilizado em apps maiores; em apps menores (como o nosso )não é muito útil...) DE UMA MANEIRA 'LAZY LOADING' NO SEU PROJETO....___