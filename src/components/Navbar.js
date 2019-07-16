import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.png';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark px-sm-5">
               <Link to="/"><img src={logo} alt="react ecommerce" className="navbar-brand"/></Link>
               <ul className="navbar-nav align-items-center">
                   <li className="nav-item ml-5">
                       <Link to="/" className="nav-link">Products</Link>
                   </li>
               </ul>
               <Link to="/cart" className="ml-auto">
                   <button>
                       <i className="fa fa-cart-plus">My Cart</i>
                   </button>
               </Link>
            </nav>
        )
    }
}
export default Navbar
