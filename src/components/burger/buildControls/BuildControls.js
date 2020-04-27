import React from 'react';
import Classes from './BuildControls.css';
import BuildControl from "./buildControl/BuildControl";

const BuildControls = (props) => {
    const controlsList = [
        {label: 'Salad', type: 'salad'},
        {label: 'Bacon', type: 'bacon'},
        {label: 'Cheese', type: 'cheese'},
        {label: 'Meat', type: 'meat'},
    ];
    return (
        <div className={Classes.BuildControls}>
            <p className={Classes.font}>
                Total Price is <strong>{props.price.toFixed(2)}</strong></p>
            {controlsList.map(element => {
                return (
                    <BuildControl
                        key={element.label}
                        label={element.label}
                        add={props.add.bind(this,element.type)}
                        remove={props.remove.bind(this,element.type)}
                        disable={props.disableInfo[element.type]}
                        amount={props.amount[element.type]}
                    />)
            })}
            <button
                className={Classes.OrderButton}
                onClick={props.purchasing}
            >Order</button>
        </div>
    );
};

export default BuildControls;