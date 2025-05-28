import React from 'react';
import './Footer.css';
import cards from '../Assets/cards.webp'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="boshop-footer">
      <div className="footer-container">
      
        <div className="footer-column">
          <h2 className="logo">Svelte</h2>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Street No. 12, Newyork 12, MD – 123, USA.</p>
          <p><FontAwesomeIcon icon={faPhone} /> 1.800.123.456789</p>
          <p><FontAwesomeIcon icon={faPhone} /> 1.800.123.456789</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> info@BoShop.com</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> contact@BoShop.com</p>
        </div>

       
        <div className="footer-column">
          <h4>Links</h4>
          <p>Products</p>
          <p>Features</p>
          <p>Blog</p>
          <p>Products</p>
          <p>Features</p>
          <p>Blog</p>
        </div>

      
        <div className="footer-column">
          <h4>Info</h4>
          <p>Find a Store</p>
          <p>Privacy Policy</p>
          <p>Press Kit</p>
          <p>Find a Store</p>
          <p>Privacy Policy</p>
          <p>Press Kit</p>
        </div>

       
        <div className="footer-column">
          <h4>Account Info</h4>
          <p>Products</p>
          <p>Find a Store</p>
          <p>Features</p>
          <p>Privacy Policy</p>
          <p>Blog</p>
          <p>Press Kit</p>
        </div>
      </div>

     
      <div className="footer-bottom">
        <p>&copy; 2025 BoShop. All rights reserved. <span className="webicode">webicode</span></p>
        <div className="card-images">
          <img src={cards} alt="Payment Cards" />
        </div>
      </div>
    </footer>
  );
}
