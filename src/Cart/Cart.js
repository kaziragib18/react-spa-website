import React from 'react';
import './Cart.css'

const Cart = (props) => {

      const { cart } = props || {}

      // using reduce to do calculation on the cart 
      const totalReducer = (previousValue, currentValue) => previousValue + currentValue.price;
      const total = cart.reduce(totalReducer, 0);
      return (
            <div className="cart__div p-3 m-4 border rounded-3 text-dark">
                  <h1 className="text-center fst-italic">My <span className="text-info">Cart</span></h1>
                  <hr />
                  <h4 className="fw-bold fs-6 text-center pb-3">Item added: {cart.length}</h4>
                  <ul className="fs-6 ">
                        {
                              cart.map(item => <li className="text-danger fs-6 fw-bold">{item.name}</li>)
                        }
                  </ul>
                 <hr />
                  <p className="fs-4 fw-bold">Total: <span className="text-danger">{total}</span></p>
            </div>
      );
};

export default Cart;