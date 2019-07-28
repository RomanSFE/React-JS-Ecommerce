import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';

class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) =>{
                    const {modalOpen, closeModal} = value;
                    const {img, title, price} = value.modalProduct;

                    if(!modalOpen){
                        return null;
                    } else {
                        return(
                        <div className="container modal-section">
                            <div className="row">
                                <div id="modal" className="col-8 col-md-6 p-2 mx-auto col-lg-6 text-center text-capitalize">
                                    <h5 className="itm-addd">Item Added to the cart</h5>
                                    <img src={img} alt="product" className="img-fluid"/>
                                    <h5>{title}</h5>
                                    <h5 className="modal-price">Price - ${price}</h5>
                                    <Link to="/">
                                        <button className="cont-shopp mb-2 mr-2" onClick={()=>closeModal()}>Store</button>
                                    </Link>
                                    <Link to="/cart">
                                        <button className="cart-shopp" onClick={()=>closeModal()}>Go to the cart</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        )
                    }

                }}
            </ProductConsumer>
        )
    }
}
export default Modal
