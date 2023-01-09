import { configure } from 'enzyme';

import { shallow } from 'enzyme';

import React from 'react';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import NavigationItems from './NavigationItems';

import NavigationItem from './NavigationItem/NavigationItem';


configure(
    {
        adapter: new Adapter()
    }
);



// describe('<NavigationItems />', 

// () => {
//         it('should render two <NavigationItem /> elements if not authenticated', 

//         () => {
//             const wrapper = shallow(<NavigationItems/>);
//             expect(wrapper.find(NavigationItem)) /////SIM, COISAS NO INTERIOR DE NOSSO COMPONENT DEVEM SER ESCRITAS ASSIM... (shallowly rendered, por isso não usamos '< JSX />', e sim 'JSX'...)
//             .toHaveLength(2); ///////ESSA É A 'ALMA' DOS NOSSOS TESTS.... ---> SÃO INÚMERAS UTILITY FUNCTIONS EXISTENTES DENTRO DE 'expect' QUE NOS DEIXAM DEFINIR o final da narrativa 'expect xxx ....'  (tipo 'toBe', 'toBeGreaterThan', 'toHaveLength', etc etc...).
//                                 ////aqui, no caso, vamos 'expect' que O NÚMERO DE COMPONENTS 'NavigationItem' renderizados SEJA EXATAMENTE de '2'..
//     }
//         )




//         it('should render three <NavigationItem /> elements if authenticated', 

//         () => {
//             const wrapper = shallow(<NavigationItems logout/>);  //pass MANUAL de prop  PARA UM COMPONENT, para conseguir realizar um test... --> assim estaremos AUTENTICADOS NO TEST, e aí poderemos testar 'avalie se realmente NavItems renderiza 3 NavItem quando estamos autenticados (token/prop logout presente)'... -->  OU SEJA, VAMOS CONTINUAR USANDO 'shallow()', mas com essa maracutaia especial embutida...
//             expect(wrapper.find(NavigationItem)) 
//             .toHaveLength(3); 
                            
//     }
//         )
// }

// )






describe('<NavigationItems />', 

() => {
        let wrapper;
        beforeEach(() => {
            wrapper = shallow(<NavigationItems/>);
        })

        it('should render two <NavigationItem /> elements if not authenticated', 

        () => {
            expect(wrapper.find(NavigationItem)) /////SIM, COISAS NO INTERIOR DE NOSSO COMPONENT DEVEM SER ESCRITAS ASSIM... (shallowly rendered, por isso não usamos '< JSX />', e sim 'JSX'...)
            .toHaveLength(2); ///////ESSA É A 'ALMA' DOS NOSSOS TESTS.... ---> SÃO INÚMERAS UTILITY FUNCTIONS EXISTENTES DENTRO DE 'expect' QUE NOS DEIXAM DEFINIR o final da narrativa 'expect xxx ....'  (tipo 'toBe', 'toBeGreaterThan', 'toHaveLength', etc etc...).
                                ////aqui, no caso, vamos 'expect' que O NÚMERO DE COMPONENTS 'NavigationItem' renderizados SEJA EXATAMENTE de '2'..
    }
        )




        it('should render three <NavigationItem /> elements if authenticated', 

        () => {
            // wrapper = shallow(<NavigationItems logout/>);                //pass MANUAL de prop  PARA UM COMPONENT, para conseguir realizar um test... --> assim estaremos AUTENTICADOS NO TEST, e aí poderemos testar 'avalie se realmente NavItems renderiza 3 NavItem quando estamos autenticados (token/prop logout presente)'... -->  OU SEJA, VAMOS CONTINUAR USANDO 'shallow()', mas com essa maracutaia especial embutida...
            wrapper.setProps( ///'setProps()' --> é um método existente DENTRO DO ENZYME, que nos deixa passar 'props' necessários aos nossos testes AOS COMPONENTS QUE FORAM RENDERIZADOS COM 'shallow'... (como visto no <NavigationItems /> armazenado nesse 'wrapper'...)
                {
                    logout: true
                }
            )
            expect(wrapper.find(NavigationItem)) 
            .toHaveLength(3); 
                            
    }
        )
}

)
