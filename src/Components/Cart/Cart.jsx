import React from 'react';
import './Cart.css';

const Cart = ({cart, handleRemoveFromCart}) => {
    let message;
    if(cart.length === 0){
        message = <h2 >Please add products</h2>
    }else{
       message = <h4>Thanks for adding products</h4>
    }
    return (
        <div>
            <h2 className={cart.length === 1 ? 'sky-blue' : 'orange'}>Order Summary: {cart.length}</h2>
            {
            cart.length > 2 
            ? <span >Buy more</span> 
            : <span className='sky-blue'>Add products</span>
            }
            {message}
            {
                cart.map(tshirt=> <p 
                    key={tshirt._id}
                    >{tshirt.name} <button onClick={()=>handleRemoveFromCart(tshirt._id)}>x</button></p>)
            }
            {
                cart.length === 2 && <p>Double bonus</p>
            }
            {
                cart.length === 3 || <p className='yellow'>3ta to hoilo na!</p>
            }
        </div>
    );
};

export default Cart;

/** Conditional rendering:
 * 1. Use if else to set a variable that will contain an element , components
*2. ternary operator: condition ? 'for true' : 'false'
* 3. Logical && : (if the condition is true then the next thing will be displayed)
* 4. Logical || : (if the condition is false then the next thing will be displayed)

**/