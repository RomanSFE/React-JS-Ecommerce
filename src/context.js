import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: storeProducts,
        detailProduct: detailProduct
    }
    handleDetail = () =>{
        console.log("hello from detail")
    }
   
    addtoCart = () =>{
        console.log("hello from Cart")
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addtoCart:this.addtoCart,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;
export {ProductProvider, ProductConsumer};
