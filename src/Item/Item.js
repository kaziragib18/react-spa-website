import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const Item = (props) => {
      const { name, img, item, price, desc, location} = props.item||{};
      //font awesome
      const cartIcon = <FontAwesomeIcon icon={faShoppingCart}/>
 
      // console.log(props.item);

      return (
            <div className="col-md-4"> 
            <div class="card mb-3" style={{ "max-width": "540px" }}>
                  <div class="row g-0">
                        <div class="col-md-12">
                              <div class="card-body">
                              <img src={img} class="img-fluid rounded w-100 h-50" alt="..." />
                                    <h5 class="card-title fs-6 pt-3">Name: <span className="text-primary">{name}</span></h5>
                                    <h5 class="card-title fs-6 text-dark mt-3">Item: <span className="text-danger">{item}</span></h5>
                                    <h5 class="card-title fs-6 text-dark mt-3">Description: <span className="text-dark">{desc.slice(0,150)}...</span></h5>
                                    <h5 class="card-title fs-6 text-dark mt-3">Country: <span className="text-danger">{location}</span></h5>
                                    <p class="card-text mt-3 fw-bold">Price: $<span className="text-danger">{price}</span></p>
                                    <button 
                                    onClick ={() => props.handleAddItem(props.item)}
                                    className="btn btn-danger">{cartIcon} Add to cart</button>
                                   
                              </div>
                        </div>
                  </div>
            </div>
      </div>
      );
};

export default Item;