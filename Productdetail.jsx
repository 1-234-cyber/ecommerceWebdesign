import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import bag1 from '../Assets/bag1.jpg';
import bag3 from '../Assets/bag3.jpg';
import bag5 from '../Assets/bag5.jpg';
import bag8 from '../Assets/bag8.jpg';
import glasses2 from '../Assets/glasses2.jpg';
import glasses3 from '../Assets/glasses3.jpeg';
import ear1 from '../Assets/ear1.jpg';
import ear2 from '../Assets/ear2.jpg';

const products = [
  { id: "1", image: glasses2, title: "Urban Luxe", price: "$28", material: "Italian Leather", type: "glasses" },
  { id: "2", image: glasses3, title: "Classic Charm", price: "$34", material: "Soft Calfskin", type: "glasses" },
  { id: "3", image: ear2, title: "Pearl Whisper", price: "$27", material: "Mother of Pearl & Sterling Silver", type: "jewelry" },
  { id: "4", image: bag1, title: "Royal Grace", price: "$52", material: "Premium Cowhide Leather", type: "bag" },
  { id: "5", image: bag3, title: "Canvas Bloom", price: "$38", material: "Eco Canvas & Organic Cotton", type: "bag" },
  { id: "6", image: ear1, title: "Noir Éclat", price: "$75", material: "Black Diamond & White Gold", type: "jewelry" },
  { id: "7", image: bag5, title: "Twilight Spark", price: "$70", material: "Crystal & Platinum Mesh", type: "bag" },
  { id: "8", image: bag8, title: "Midnight Luxe", price: "$72", material: "Onyx Stone & Platinum Weave", type: "bag" },
   {id: "9", image: bag5, title: "Twilight Spark", price: "$70", material: "Crystal & Platinum Mesh", type: "bag" },
  { id: "10", image: bag8, title: "Midnight Luxe", price: "$72", material: "Onyx Stone & Platinum Weave", type: "bag" }
];

const getDescription = (type) => {
  switch (type) {
    case "bag":
      return (
        <>
          <p>Discover timeless elegance and contemporary charm with our latest collection of luxury bags. Each piece is designed to complement your daily essentials while enhancing your wardrobe with a statement of craftsmanship.</p>
          <p>Whether you're heading to a boardroom or a brunch, these bags blend form and function seamlessly with rich textures and durable materials.</p>
        </>
      );
    case "glasses":
      return (
        <>
          <p>Elevate your style with our exclusive line of fashion-forward eyewear. Designed for comfort and crafted for sophistication, these glasses frame your look with poise and personality.</p>
          <p>Perfect for both casual and formal settings, our glasses offer a modern aesthetic that balances timeless charm with bold detail.</p>
        </>
      );
    case "jewelry":
      return (
        <>
          <p>Our handcrafted jewelry collection exudes grace, elegance, and luxury. Each piece tells a story — from lustrous pearls to striking gemstones, these accessories enhance your natural glow.</p>
          <p>Designed for the discerning individual, this jewelry transforms any occasion into a cherished memory.</p>
        </>
      );
    default:
      return null;
  }
};

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === productId);

  if (!product) {
    return <h2 style={{ textAlign: 'center', margin: '2rem' }}>Product Not Found</h2>;
  }

  return (
    <>
      <Navbar />
      <div style={{ padding: '2rem', maxWidth: '900px', margin: 'auto' }}>
        <div style={{ marginBottom: '1rem' }}>
          <button onClick={() => navigate(-1)} style={{
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <ArrowLeft size={20} />
            <span style={{ fontWeight: '500' }}>Back</span>
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 40%' }}>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: '100%', borderRadius: '10px' }}
            />
          </div>

          <div style={{ flex: '1 1 50%' }}>
            <h2>{product.title}</h2>
            <p><strong>Price:</strong> {product.price}</p>
            <p><strong>Material:</strong> {product.material}</p>
            <div style={{ marginTop: '1rem' }}>
              {getDescription(product.type)}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
