import React from 'react';
import Classes from './BackDrop.css';

const BackDrop = (props) => {
    return(
        props.show ? (<div
            className={Classes.backDrop}
            onClick={props.click}
        > </div>) : null
    );
};

export default BackDrop;