import React from 'react';
import Aux from '../../../hoc/Auxillary';
import Button from '../../UI/Button/Button';

const orderSummary = ( props ) => {

    const ingredientsSummary = Object.keys(props.ingredients )
    .map( igKey => {
        return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
        );
    } );
    return(
        <Aux>            
            <h3>Your order</h3>
            <p>A delicious burgher with following burger</p>
            <p>Total price is: {props.price}</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>continue to checkout .. yes or no!</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>Continue</Button>
        </Aux>
    );
    }

    export default orderSummary;