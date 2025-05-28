
import { Link } from 'react-router-dom'; 
import bag9 from '../Assets/bag9.jpg';
import bag1 from '../Assets/bag1.jpg';
import bag3 from '../Assets/bag3.jpg';
import bag4 from '../Assets/bag4.jpg';
import bag5 from '../Assets/bag5.jpg';
import bag8 from '../Assets/bag8.jpg';
import bag11 from '../Assets/bag11.jpg';
import bag55 from '../Assets/bag55.jpg';

import Footer from '../Component/Footer';






export default function Products() {

  


  const products = [
    {  image: bag9, title: "Urban Luxe", price: "$28", material: "Italian Leather" },
    {  image: bag3, title: "Classic Charm", price: "$34", material: "Soft Calfskin" },
    {  image: bag1, title: "Pearl Whisper", price: "$27", material: "Mother of Pearl & Sterling Silver" },
    {  image: bag4, title: "Royal Grace", price: "$52", material: "Premium Cowhide Leather" },
    {  image: bag5, title: "Canvas Bloom", price: "$38", material: "Eco Canvas & Organic Cotton" },
    {  image: bag8, title: "Noir Éclat", price: "$75", material: "Black Diamond & White Gold" },
    {  image: bag11, title: "Twilight Spark", price: "$70", material: "Crystal & Platinum Mesh" },
    {  image: bag55, title: "Midnight Luxe", price: "$72", material: "Onyx Stone & Platinum Weave" },
  ];

  return (
    <>
    
      <h2 style={{
        color: 'white',
        textAlign: 'center',
        background: 'linear-gradient(to right,rgb(44, 44, 40), #E8EAAD)',
        fontFamily: 'initial',
        padding: '1%',
        marginBottom: '0%'
      }}>New Arrivals</h2>

      <div style={{ background: '#F5F5F5', padding: '2rem 0' }}>
        <div className="row g-4" style={{ marginLeft: '2%', marginRight: '2%', marginTop: '4%' }}>
          {products.map((product, index) => (
            <div className="col-md-3" key={index}
              style={{ textDecoration: 'none', color: 'inherit' }}>
                <div
                  className="card custom-card shadow-sm"
                  style={{
                    border: 'none',
                    borderRadius: '12px',
                    backgroundColor: '#FAFAFA',
                    height: '320px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '0.75rem',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="card-img-top mb-2"
                    style={{ height: '150px', objectFit: 'cover', borderRadius: '8px' }}
                  />
                  <div className="card-body p-0">
                    <h6 className="card-title mb-1" style={{ fontSize: '1rem' }}>{product.title}</h6>
                    <p className="card-text" style={{ fontSize: '0.85rem' }}>
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
          
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
