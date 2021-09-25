import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Item from '../../Item/Item';

const Main = () => {

      const [items, setItem] = useState([]);

       // state for cart product 
       const [cart, setCart] = useState([]);

       //declare event handler where state is  

      const handleAddItem =(product) => {
            //set products one by one in the cart
            const newCart = [...cart , product]
            setCart(newCart);

            // console.log(product);

      }

       useEffect(() => {
            fetch("/ItemsData.json")
                  .then(res => res.json())
                  .then(data => setItem(data))
      }, [])


      return (
            <div>
            <div className="row">
                  <div className="col-md-9">
                        {/* product load component */}

                        <div className="row">
                              {
                                    items.map(item => <Item item={item}
                                    handleAddItem={handleAddItem}

                                    >
                                    </Item>)
                              }

                        </div>

                  </div>
                  <div className="col-md-3">
                        {/* cart calculation  */}
                        <Cart
                        cart={cart}
                        >

                        </Cart>

                  </div>
            </div>
      </div>
      );
};

export default Main;