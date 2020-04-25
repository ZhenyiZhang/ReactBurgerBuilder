import React from 'react';
import Classes from './Modal.css';
import BackDrop from "../BackDrop/BackDrop";

const Modal = (props) => {
    return (
        <div>
            <BackDrop
                show={props.show}
                click={props.backDropClick}/>
            <div className={Classes.Modal}
                 style={{
                     transform: props.show ? 'translateY(0)': 'translateY(-100vh)',
                     opacity: props.show ? '1': '0',
                 }}>
                {props.children}
            </div>
        </div>);
};

export default Modal;

