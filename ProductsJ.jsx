import React from 'react';
import ear2 from '../Assets/ear2.jpg';
import ear1 from '../Assets/ear1.jpg';
import ear3 from '../Assets/ear3.jpg';
import ear4 from '../Assets/ear4.jpg';  
import ear5 from '../Assets/ear5.jpg';
import ear6 from '../Assets/ear6.jpg';
import './Products.css';


export default function Products() {

 

  const products = [
    { image: ear1, title: "Traditional jhumki", price: "$23", material: "Metal & Glass", id: 1 },
    { image: ear2, title: "Decent Earings", price: "$30", material: "Gold Plated", id: 2 },
    { image: ear3, title: "Flower Earings", price: "$25", material: "Pearl & Silver", id: 3 },
    { image: ear4, title: "Green Stone earings", price: "$45", material: "Genuine Leather", id: 4 },
    { image: ear5, title: "Elegant Earings", price: "$35", material: "Canvas & Cotton", id: 5 },
    { image: ear6, title: "Heart Earings", price: "$60", material: "Diamond & Platinum", id: 6 },
  ];

  return (
    <div style={{ background: '#F5F5F5', paddingBottom: '5%' }}>
      <div className="container mp-4 d-flex gap-4 justify-content-center flex-wrap">
        {products.map((product, index) => (
          <div className="card custom-card p-3" key={index} style={{
            border: 'none',
            borderRadius: '10px',
            backgroundColor: '#FAFAFA'
          }}>
            <img src={product.image} className="card-img-top" alt={product.title} />
            <div className="card-body" style={{ backgroundColor: '#ffffff' }}>
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">
                Price: {product.price}<br />
                Material: {product.material}
              </p>
              <button
                className="btn"
                style={{
                  backgroundColor: 'black',
                  color: '#fff',
                  border: 'none',
                  fontWeight: '500',
                  borderRadius: '5px'
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
 