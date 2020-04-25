import React from 'react';

const OrderSummary = (props) => {
    const CheckoutButtonStyle = {
        backgroundColor: '#bf3813',
        fontSize: '1.0rem',
        color: 'white'
    };
    const summary = Object.keys(props.summary).map((key, index) => {
        return(<li key={key + index}>
            <span style={{ textTransform: 'capitalize'}}>
                {key}: {props.summary[key]}
            </span>
        </li>);
        });
    return (
        <div>
            <h3>Your Order Summary:</h3>
            <ul>
                {summary}
            </ul>
            <button style={CheckoutButtonStyle}>Continue to checkout</button>
            <button> cancel </button>
        </div>
    );

};

export default OrderSummary;