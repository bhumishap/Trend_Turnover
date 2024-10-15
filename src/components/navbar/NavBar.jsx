import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; 
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'; 
import './NavBar.css';
import logo from '../../assets/logo.png';

const NavBar = () => {
    return (
        <nav className="navbar">

            <div className="navbar-logo">
               <Link to='/'><img src={logo} alt="Company Logo" className="navbar-logo-image"/></Link> 
            </div>

            <div className="navbar-links">
                <Link to="/" className="navbar-link cen">Home</Link>
                {/* <Link to="/shop" className="navbar-link cen"></Link> */}
                <Link to="/sell" className="navbar-link cen">Sell</Link>
                <Link to="/shop" className="navbar-link cen">Buy</Link>
                <Link to="/donate" className="navbar-link cen">Donate</Link>
                <Link to="/qualitycheck" className="navbar-link">Quality Check</Link> 
                <Link to="/guide" className="navbar-link cen">Guide</Link>
                <Link to="/about" className="navbar-link cen">About</Link>
                {/* <Link to="/#" className="navbar-link cen">Admin Panel</Link> */}
            </div>

            <div>
                <Link to="/account" className="navbar-link pro-icon pro-link">
                    <FontAwesomeIcon icon={faUser} />
                </Link>
                <Link to="/" className="navbar-link pro-icon pro-link">
                    <FontAwesomeIcon icon={faCartShopping} className='cart-icon'/>
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;