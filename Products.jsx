import React from 'react';
import { useNavigate } from 'react-router-dom';

import glasses2 from '../Assets/glasses2.jpg';
import glasses3 from '../Assets/glasses3.jpeg';
import ear1 from '../Assets/ear1.jpg';
import ear2 from '../Assets/ear2.jpg';
import bag1 from '../Assets/bag1.jpg';
import bag3 from '../Assets/bag3.jpg';
import bag5 from '../Assets/bag5.jpg';
import bag8 from '../Assets/bag8.jpg';
import { useCart } from '../Context/CartContext';
import './Products.css';

export default function Products() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const products = [
    {
      id: '1',
      images: [glasses2, glasses3],
      title: "Elegant Glasses",
      price: 23,
      material: "Metal & Glass",
      description: "Durable metal frames and high-quality lenses."
    },
    {
      id: '2',
      images: [glasses3, glasses2],
      title: "Transparent Glasses",
      price: 30,
      material: "Gold Plated",
      description: "Transparent frames with gold plating."
    },
    {
      id: '3',
      images: [ear2, ear1],
      title: "Pearl Earrings",
      price: 25,
      material: "Pearl & Silver",
      description: "Delicate pearl earrings set in silver."
    },
    {
      id: '4',
      images: [bag1, bag3],
      title: "Leather Handbag",
      price: 45,
      material: "Genuine Leather",
      description: "Luxurious leather handbag."
    },
    {
      id: '5',
      images: [bag3, bag1],
      title: "Casual Tote Bag",
      price: 35,
      material: "Canvas & Cotton",
      description: "Eco-friendly tote made from canvas and cotton."
    },
    {
      id: '6',
      images: [ear1, ear2],
      title: "Traditional Jhumki",
      price: 60,
      material: "Diamond & Platinum",
      description: "Traditional jhumki finished in platinum."
    }
  ];

  return (
    <div style={{ background: '#F5F5F5', minHeight: '100vh' }}>
      <div className="container pb-4 d-flex gap-4 justify-content-center flex-wrap" style={{ paddingTop: '5%' }}>
        {products.map((product) => (
          <div
            key={product.id}
            className="card custom-card p-3"
            style={{
              border: 'none',
              borderRadius: '10px',
              backgroundColor: '#FAFAFA',
              width: '290px',
            }}
          >
            <div
              onClick={() => navigate(`/product/${product.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={product.images[0]}
                className="card-img-top"
                alt={product.title}
                style={{
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
              />
              <div className="card-body p-0 mt-2" style={{ backgroundColor: '#ffffff' }}>
                <h6 className="card-title mb-1" style={{ fontSize: '1rem' }}>{product.title}</h6>
                <p className="card-text" style={{ fontSize: '0.85rem' }}>
                  <strong>Price:</strong> ${product.price}<br />
                  <strong>Material:</strong> {product.material}<br />
                  <span style={{ fontSize: '0.75rem', color: '#555' }}>{product.description}</span>
                </p>
              </div>
            </div>

            <button
              className="btn btn-sm"
              onClick={() => addToCart(product)}
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
        ))}
      </div>
    </div>
  );
}
