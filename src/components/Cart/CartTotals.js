import React from 'react';
import {Link} from 'react-router-dom';

export default function CartTotals({value}) {
    const{cartSubTotal, cartTax, cartTotal, clearCart} = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto text-right text-capitalize mx-auto col-sm-8">
                        <Link to="/">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-4" 
                            type="button" onClick={() =>clearCart()}>Clear Cart
                            </button>
                        </Link>
                        <h5 className="subtotal-cls">
                            <span>Subtotal: </span>
                            <strong>$ {cartSubTotal}</strong>
                        </h5>
                        <h5 className="subtotal-cls">
                            <span>Tax: </span>
                            <strong>$ {cartTax}</strong>
                        </h5>
                        <h5 className="subtotal-cls">
                            <span>Total: </span>
                            <strong>$ {cartTotal}</strong>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
