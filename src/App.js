import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Product from './components/Product';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';

function App() {
  return (
    <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
                <Navbar/>
                <ProductList/>
                <Product/>
                <Details/>
                <Cart/>
                <Default/>
            </div>
          </div>
        </div>
    </React.Fragment>
    
  );
}

export default App;
