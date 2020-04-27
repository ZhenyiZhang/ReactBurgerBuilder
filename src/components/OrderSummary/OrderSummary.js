import React from 'react';
import Classes from './SummaryButtons.css';

const OrderSummary = (props) => {
    const summary = Object.keys(props.summary).map((key, index) => {
        return(
            <li key={key + index}
                style={{listStylePosition: 'inside'}}>
            <span style={{ textTransform: 'capitalize'}}>
                {key}: {props.summary[key]}
            </span>
            </li>);
    });
    return (
        <div style={{textAlign:'center'}}>
            <h3>Your Order Summary:</h3>
            <ul>
                {summary}
            </ul>
            <h4> Total Price ${props.price}</h4>
            <p>Your Name:</p>
            <input/>
            <br/>
            <p>Your Phone Number:</p>
            <input/>
            <br/>
            <button
                onClick={props.continue}
                className={[Classes.Button, Classes.Success].join(' ')}>Continue</button>
            <button
                onClick={props.cancel}
                className={[Classes.Button, Classes.Danger].join(' ')}>Cancel</button>
        </div>
    );

};

export default OrderSummary;