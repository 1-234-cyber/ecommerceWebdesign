import React, { useContext } from 'react';
import glasses2 from '../Assets/glasses2.jpg';
import glasses3 from '../Assets/glasses3.jpeg';
import glasses1 from '../Assets/glasses1.jpg';
import glasses5 from '../Assets/glasses5.jpg';
import glass3 from '../Assets/glass3.webp';
import fourglass from '../Assets/fourglass.webp';
import './Products.css';

 



export default function Products() {

  
  const products = [
    { image: glasses2, title: "Elegant Glasses", price: "$23", material: "Metal & Glass" },
    { image: glasses3, title: "Transparent glasses", price: "$30", material: "Gold Plated" },
    { image: glasses1, title: "Elegant Glasses", price: "$25", material: "Pearl & Silver" },
    { image: glass3, title: "Elegant Glasses", price: "$45", material: "Genuine Leather" },
    { image: glasses3, title: "Elegant Glasses", price: "$35", material: "Canvas & Cotton" },
    { image: glasses1, title: "Elegant Glasses", price: "$60", material: "Diamond & Platinum" },
  ];

  return (
    <div style={{ background: '#F5F5F5' }}>
      <div className="container mp-4 d-flex gap-4 justify-content-center flex-wrap">
        {products.map((product, index) => (
          <div className="card custom-card p-3" style={{
            border: 'none',
            borderRadius: '10px',
            backgroundColor: '#FAFAFA',
          }} key={index}>
            <img src={product.image} className="card-img-top" alt={product.title} />
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
