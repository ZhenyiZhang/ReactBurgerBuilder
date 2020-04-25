import React from 'react';
import BurgerIngredient from "./burgerIngredients/BurgerIngredients";
import Classes from './Burger.css'

const Burger = (props) => {
    let ingredientsArray = Object.keys(props.ingredients).map(key => {
        return [...Array(props.ingredients[key])].map((_, index) => {
            return (<BurgerIngredient key={key + index} type={key}/>);
        })
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    if(ingredientsArray.length === 0) {
        ingredientsArray = (<p> Please add some ingredients </p>);
    }
    return (
        <div className={Classes.Burger}>
            <BurgerIngredient type="breadTop"/>
            {ingredientsArray}
            <BurgerIngredient type="breadBottom"/>
        </div>
    );
};

export default Burger;