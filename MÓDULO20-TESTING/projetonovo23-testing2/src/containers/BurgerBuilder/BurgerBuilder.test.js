import React from 'react';

import { configure } from 'enzyme';

import { shallow } from 'enzyme';

import { BurgerBuilder } from './BurgerBuilder';

import  BuildControls from '../../components/Burger/BuildControls/BuildControls';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({
  adapter: new Adapter(),
});

describe('<BurgerBuilder />',  


() => {
        
        let wrapper;
        beforeEach(
            () => {   wrapper = shallow(<BurgerBuilder onIngredientGet={() => {}} onRedirectToHomeReset={() => {}}/>) }
        )

       


        it('should render <BuildControls />  if props.ingr is present...',
        
            () => {
                wrapper.setProps(
                    {
                        // ingr: true // isso NÃO FUNCIONARÁ PQ o nosso 'prop de verdade' é UM OBJETO com estrutura '{salad: 0, meat: 0, cheese: 0, bacon: 0}', E NÃO UM SIMPLES BOOLEAN DE TRUE/FALSE...
                        ingr: {
                            salad: 0,  //código CERTO. --> test vai funcionar, pq essa era a estrutura de nosso prop, no final das contas...
                            bacon: 0,
                            meat: 0,
                            cheese: 0
                        }
                    }
                )
                expect(wrapper.find(BuildControls)).toHaveLength(1);
            }
        )



});
