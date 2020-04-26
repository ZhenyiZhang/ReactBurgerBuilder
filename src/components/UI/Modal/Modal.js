import React, {Component} from 'react';
import Classes from './Modal.css';
import BackDrop from "../BackDrop/BackDrop";


class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.show !== nextProps.show
    }

    render() {
        return (
            <div>
                <BackDrop
                    show={this.props.show}
                    click={this.props.backDropClick}/>
                <div className={Classes.Modal}
                     style={{
                         transform: this.props.show ? 'translateY(0)': 'translateY(-100vh)',
                         opacity: this.props.show ? '1': '0',
                     }}>
                    {this.props.children}
                </div>
            </div>);
    }
}

export default Modal;

