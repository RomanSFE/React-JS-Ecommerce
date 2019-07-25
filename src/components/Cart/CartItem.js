import React from 'react'

export default function CartItem({item, value}) {
    const {id, title, img, price, total, count} = item;
    const {increment, decrement, removeItem} = value;
    return (
        <div className="row text-center my-3 text-capitalize">
            <div className="col-10 col-lg-2 mx-auto">
                <img src={img} style={{width: "7rem", height: "7rem"}} 
                className="img-fluid" alt="product"
                />
            </div>

            <div className="col-10 col-lg-2 mx-auto">
                <span className="d-lg-none">product: </span>
                {title}
            </div>
            <div className="col-10 col-lg-2 mx-auto">
                <span className="d-lg-none">price: </span>
                ${price}
            </div>
            <div className="col-10 mx-auto my-2 my-lg-0">
                <div className="d-flux justyfy-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={()=> decrement(id)}> - </span>
                        <span className="btn btn-black mx-1">{count}</span>
                        <span className="btn btn-black mx-1" onClick={()=> increment(id)}> + </span>
                    </div>
                </div>
            </div>

            <div className="col-10 col-lg-2 mx-auto">
                <div className="cart-icon" onClick={()=>removeItem(id)}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>

            <div className="col-10 col-lg-2 mx-auto">
                <strong>Item Total: ${total}</strong>
            </div>
            
        </div>
    )
}
