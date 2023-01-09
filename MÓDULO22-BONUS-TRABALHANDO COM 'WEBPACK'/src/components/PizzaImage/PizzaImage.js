import React from 'react';



import PizzaImageStyle from './PizzaImage.module.css';


import PizzaImage from '../../assets/pizza.jpg';



const pizzaImage = (props) => {
        return <div className={PizzaImageStyle.PizzaImage}>
                <img src={PizzaImage} className={PizzaImageStyle.PizzaImage}/>
        </div>
}







export default pizzaImage;