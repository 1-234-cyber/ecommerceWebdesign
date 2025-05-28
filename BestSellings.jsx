
import ear2 from '../Assets/ear2.jpg';
import ear1 from '../Assets/ear1.jpg';
import ear3 from '../Assets/ear3.jpg';
import ear4 from '../Assets/ear4.jpg';
import ear5 from '../Assets/ear5.jpg';
import ear6 from '../Assets/ear6.jpg';
import ear33 from '../Assets/ear33.jpg';
import ear66 from '../Assets/ear66.jpg';

import Footer from '../Component/Footer';





export default function Products() {

  const products = [
    { image: ear1, title: "Traditional jhumki", price: "$23", material: "Metal & Glass" },
    { image: ear2, title: "Decent Earings", price: "$30", material: "Gold Plated" },
    { image: ear3, title: "Flower Earings", price: "$25", material: "Pearl & Silver" },
    { image: ear4, title: "Green Stone earings", price: "$45", material: "Genuine Leather" },
    { image: ear5, title: "Elegant Earings", price: "$35", material: "Canvas & Cotton" },
    { image: ear6, title: "Heart Earings", price: "$60", material: "Diamond & Platinum" },
    { image: ear33, title: "Elegant Earings", price: "$35", material: "Canvas & Cotton" },
    { image: ear66, title: "Heart Earings", price: "$60", material: "Diamond & Platinum" },
  ];

  return (
    <> 
   
     <h2 style={{
      color: 'white',
      textAlign: 'center',
      background:'linear-gradient(to right,rgb(44, 44, 40), #E8EAAD)',
      fontFamily: 'initial',
      padding: '1%',
      marginBottom:'0%'}}
    >Best Sellings</h2>
    <div style={{ background: '#F5F5F5', padding: '2rem 0' }}>
  <div>
    <div className="row g-4" style={{marginLeft:'2%',marginRight:'2%',  marginTop:'4%'}}> 
      {products.map((product, index) => (
        <div className="col-md-3" key={index}>
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
</div>

<Footer/>
</>
  );
}
