import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
// * This could be a functional component, doesn't have to be a class

    componentDidUpdate () {
        console.log('[OrderSummary] DidUpdate');
    }

    render () {

        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                 <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}: </span> 
                     {this.props.ingredients[igKey]}
                  </li>
                  );
    });
        
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.price.toFixed(0)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button 
                btnType="Danger"
                clicked={this.props.purchaseCancelled}
                >Cancel</Button>
            <Button 
                btnType="Success"
                clicked={this.props.purchaseContinued}
                >Contintue</Button>
        </Aux>
    );
}

}


OrderSummary.proptypes = {
    ingredients: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    purchaseCancelled: PropTypes.func.isRequired,
    purchaseContinued: PropTypes.func.isRequired
};

export default OrderSummary;