import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag} from '@fortawesome/free-solid-svg-icons';
import './Cart.css'

const Cart = (props) => {

      const { cart } = props || {}

      //font awesome
      const cartIcon = <FontAwesomeIcon icon={faShoppingBag}/>

      // using reduce to do calculation on the cart 
      const totalReducer = (previousValue, currentValue) => previousValue + currentValue.price;
      const total = cart.reduce(totalReducer, 0);
      return (
            <div className="cart__div p-3 m-4 border rounded-3 text-dark">
                  <h1 className="text-center fst-italic">My <span className="text-danger">Cart</span> <span className="text-dark">{cartIcon}</span></h1>
                  <hr />
                  <h4 className="fw-bold fs-6 pb-2">Item added: {cart.length}</h4>
                  <ul className="fs-6 ">
                        {
                              cart.map(item => <li className="text-primary fs-6 fw-bold">{item.name}</li>)
                        }
                  </ul>
                 <hr />
                  <p className="fs-5 fw-bold">Total: <span className="text-danger">${total}</span></p>
            </div>
      );
};

export default Cart;