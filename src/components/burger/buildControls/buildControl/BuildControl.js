import React from 'react';
import Classes from './BuildControl.css';

const BuildControl = (props) => {
    return (
        <div className={Classes.BuildControl}>
            <div className={Classes.Label}>{props.label} x {props.amount}</div>
            <button
                className={Classes.More}
                onClick={props.add}>Add</button>
            <button
                className={Classes.Less}
                onClick={props.remove}
                disabled={props.disable}
            >Remove</button>
        </div>
    );
};

export default BuildControl;