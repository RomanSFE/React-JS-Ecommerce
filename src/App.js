import React from 'react';
import {Switch, Route} from 'react-router-dom';
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
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
                <Navbar/>
                <Switch>
                  <Route exact path="/" component={ProductList}></Route>
                  <Route path="/details" component={Details}></Route>
                  <Route path="/cart" component={Cart}></Route>
                  <Route component={Default}></Route>
                </Switch>
            </div>
          </div>
        </div>
    </React.Fragment>
    
  );
}

export default App;
