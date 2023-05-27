import React from "react";
import ReactDOM from 'react-dom';
import './Modal.css';

const Backdrop = props => {
    return <div className='backdrop' onClick={props.hideCart}></div>
};

const ModalOverlay = props => {
    return (
        <div className='modal'>
            <div className='content'>
                {props.children}
            </div>
        </div>
    )
}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop hideCart={props.hideCart}/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </React.Fragment>
    )
};

export default Modal;