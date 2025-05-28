import React from 'react';
import './About.css';
import Navbar from '../Component/Navbar';
import about from'../Assets/about.jpg'
import girl from'../Assets/girl.jpg'
import Footer from '../Component/Footer';



const About = () => {
  return (
    <>
  
    <section className="about " >
   
      <div className="about-image">
        <img
          src={about}
          alt="About our store"
        />
      </div>

    
      <div className="about-text">
        <h2>About Us</h2>
        <p>
          Welcome to our e-commerce store, your one-stop destination for top-quality products delivered with care.
          We are passionate about creating a seamless shopping experience with curated collections across fashion, electronics, home essentials, and more.
        </p>
        <p>
          Our mission is to empower customers with choice, value, and convenience. With fast shipping, secure payments,
          and responsive support, we’re here to make your online shopping smooth and satisfying. Whether you're looking for the latest tech gadgets, trendy fashion items, or 
          home essentials, we have it all under one roof.
        </p>
        
        
      </div>
      

    
      
      
    </section>
 <section className="about" >
   
 


 <div className="about-text">
 <h3>Our Vision</h3>
        <p>
          At our core, we believe in creating a shopping experience that prioritizes simplicity and convenience. 
          We are committed to helping you discover exactly what you need without any hassle, offering a wide range of products 
          that fit your lifestyle and needs.
        </p>
        <h3>Our Promise</h3>
        <p>
          We promise to continuously improve and provide you with the best shopping experience possible. From product selection 
          to delivery, we are dedicated to ensuring you have everything you need in one place, at the best prices. Thank you for 
          choosing us — we’re excited to be a part of your shopping journey!
        </p>
   
   
 </div>
 <div className="about-image">
   <img
     src={girl}
     alt="About our store"
   />
 </div>


 
 
</section>
<Footer/>
</>
  );
};

export default About;
