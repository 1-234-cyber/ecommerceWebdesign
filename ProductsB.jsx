import React, { useContext } from 'react';
import bag9 from '../Assets/bag9.jpg';
import bag1 from '../Assets/bag1.jpg';
import bag3 from '../Assets/bag3.jpg';
import bag4 from '../Assets/bag4.jpg';
import bag5 from '../Assets/bag5.jpg';
import bag8 from '../Assets/bag8.jpg';

import './Products.css';



export default function Products() {

  

  const products = [
    { image: bag9, title: "Leather Bag", price: "$23", material: "Metal & Glass" },
    { image: bag3, title: "Stylish Leather Bag", price: "$30", material: "Gold Plated" },
    { image: bag1, title: "Hand Bag", price: "$25", material: "Pearl & Silver" },
    { image: bag4, title: "Elegant Bag", price: "$45", material: "Genuine Leather" },
    { image: bag5, title: "Tote Bag", price: "$35", material: "Canvas & Cotton" },
    { image: bag8, title: "Black Handbag", price: "$60", material: "Diamond & Platinum" },
  ];

  return (
    <div style={{ background: '#F5F5F5' }}>
      <div className="container mp-4 d-flex gap-4 justify-content-center flex-wrap" style={{ paddingTop: '5%', paddingBottom: '8%' }}>
        {products.map((product, index) => (
          <div
            className="card custom-card p-3"
            style={{
              border: 'none',
              borderRadius: '10px',
              backgroundColor: '#FAFAFA',
              width: '290px'
            }}
            key={index}
          >
            <img src={product.image} className="card-img-top" alt={product.title} style={{ height: '250px', objectFit: 'cover', borderRadius: '8px' }} />
            <div className="card-body" style={{ backgroundColor: '#ffffff' }}>
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">
                Price: {product.price}<br />
                Material: {product.material}
              </p>
              <button
                className="btn btn-sm"
                style={{
                  backgroundColor: 'black',
                  color: '#fff',
                  border: 'none',
                  fontWeight: '500',
                  borderRadius: '5px',
                  marginTop: '0.5rem',
                  paddingBottom: '0.5rem'
                }}
          
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
