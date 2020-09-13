import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Modal.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';
// import { truncateSync } from 'fs-extra';

class Modal extends Component {

    
    shouldComponentUpdate ( nextProps, nextState  ) {
        return nextProps.show !== this.props.show || nextProps.children !==this.props.children;
    }

    componentDidUpdate () {
        console.log('[Modal] DidUpdate');
    }

    render () {
        return (
            <Aux>
                <Backdrop 
                    show={this.props.show}
                    clicked={this.props.modalClosed}
                    />
                <div 
                    className={classes.Modal}
                style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Aux>

        )
    }
}

Modal.prototypes = {
    show: PropTypes.func.isRequired,
    modalClosed: PropTypes.func.isRequired,
    children: PropTypes.object.isRequired
};

export default Modal;