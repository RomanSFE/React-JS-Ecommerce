import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import {Link} from 'react-router-dom';

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value =>{
                  const {id, img, price, company, title, inCart, info} = value.detailProduct;
                  return (
                      <div className="container py-4">
                          {/* title part */}
                          <div className="row">
                              <div className="col-10 text-center title-style mx-auto my-4">
                                  <h2>{title}</h2>
                              </div>
                          </div>
                          {/* title part */}
                          {/* product info */}
                          <div className="row">
                              <div className="col-10 mx-auto col-md-6 my-2 text-capitalize">
                                    <img src={img} alt="product" className="img-fluid"/>
                              </div>
                              {/* product text */}
                              <div className="col-10 mx-auto model-title col-md-6 my-2 text-capitalize">
                                    <h2>model - {title}</h2>
                                    <h4 className="company-title mt-3 mb-2 text-uppercase">
                                        made by - <span className="com-maintitle">{company}</span>
                                    </h4>
                                    <h4 className="price-text"><strong>price - <span>$ </span>{price}</strong></h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">Info About The Product</p>
                                    <p className="text-muted mt-1">{info}</p>
                              </div>
                          {/* product info */}
                      </div>
                    </div>
                  );
                }}
            </ProductConsumer>
        );
    }
}
export default Details