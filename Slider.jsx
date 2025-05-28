import React from 'react';
import './Slider.css';
import ease from '../Assets/ease.jpg';



export default function Slider() {
  return (<>
    <h3 style={{
      color: 'black',
      textAlign: 'center',
      background:'linear-gradient(to right,rgb(44, 44, 40), #E8EAAD, rgb(44, 44, 40))',
      fontFamily:'poppins', 
      padding: '1.5%',
      fontWeight:'bold',
      marginBottom:'0%'}}
    >Refine Your Look Redefine Your Style</h3>
    <div className="slider-section">
  {<div className='container mp-4' style={{paddingBottom:'4%'}}>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={ease} className="d-block w-100" alt="slide1" />
            <div className="carousel-caption d-none d-md-block">
              
            </div>
          </div>
          <div className="carousel-item">
            <img src={ease} className="d-block w-100" alt="slide2" />
            <div className="carousel-caption d-none d-md-block">
              
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>}
</div>
 </>

  );
}
