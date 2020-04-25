import Classes from './BurgerIngredients.css';
import PropTypes from 'prop-types';
import React from 'react';

const BurgerIngredient = (props) => {
    let ingredient;
    switch (props.type) {
        case('breadBottom'):
            ingredient = <div className={Classes.BreadBottom}> </div>;
            break;
        case('breadTop'):
            ingredient =
                <div className={Classes.BreadTop}>
                    <div className={Classes.Seeds1}> </div>
                    <div className={Classes.Seeds2}> </div>
                </div>;
            break;
        case('meat'):
            ingredient = <div className={Classes.Meat}> </div>;
            break;
        case('cheese'):
            ingredient = <div className={Classes.Cheese}> </div>;
            break;
        case('salad'):
            ingredient = <div className={Classes.Salad}> </div>;
            break;
        case('bacon'):
            ingredient = <div className={Classes.Bacon}> </div>;
            break;

    }
    return ingredient;
};

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;