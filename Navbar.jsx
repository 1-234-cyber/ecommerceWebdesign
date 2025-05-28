import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import { useUser } from '../Context/UserContext';
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const { user, logout } = useUser();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="#"
          style={{ fontFamily: 'initial', fontSize: '30px' }}
          onClick={(e) => { e.preventDefault(); navigate('/'); }}
        >
          Svelte
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white" style={{ fontFamily: 'initial', fontSize: '22px' }} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" style={{ fontFamily: 'initial', fontSize: '22px' }} to="/about">
                About us
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ fontFamily: 'initial', fontSize: '22px' }}
                onClick={e => e.preventDefault()}
              >
                Products
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/jewellery">Jewellery</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/glasses">Glasses</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/bags">Hand Bags</Link></li>
              </ul>
            </li>
            
          </ul>

          {/* Cart Button */}
          <Link to="/cart" className="cart-icon btn btn-outline-light me-2">
            Cart ({cartItems.length})
          </Link>

          {/* Login / Logout Toggle */}
          {!user ? (
            <Link to="/login" className="btn btn-outline-light">
              <i className="fa fa-sign-in me-1"></i> Log In
            </Link>
          ) : (
            <button onClick={handleLogout} className="btn btn-outline-light">
              <i className="fa fa-sign-out me-1"></i> Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
