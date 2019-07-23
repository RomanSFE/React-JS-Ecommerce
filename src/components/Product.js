import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';

class Product extends Component {
    render() {
        const {id, title, img, price, company, inCart} = this.props.product;
        return (
            <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                    {(value) =>(
                    <div className="img-container p-3" 
                    onClick={() => 
                        value.handleDetail(id)
                    }>

                        <Link to="/details">
                           <img src={img} alt="product" className="card-img-top"/>
                        </Link>
                        <button className="cart-btn" disabled={inCart ? true :false} onClick={() =>{
                            value.addtoCart(id);
                            value.openModal(id);
                            }}>
                            {inCart ? (
                                <p className="text-capitalize mb-0" disabled>
                                    {" "}
                                    in Cart
                                </p>
                            ) : (
                                <i className="fa fa-cart-plus"></i>
                            )}

                        </button>
                    </div>
                    )}
                    
                    </ProductConsumer>
                    <div className="card-footer d-flex justify-content-between">
                         <p className="align-self-center mb-0">{title}</p>
                         <h5 className="price-color mb-0">
                         <span className="mr-1">$</span>
                         {price}
                         </h5>   
                    </div>
                </div>
            </div>
        )
    }
}
export default Product;

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        ipriced: PropTypes.number,
        inCart: PropTypes.bool,
    }).isRequired
};
