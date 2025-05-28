import React from 'react';
import Slider from '../Component/Slider';
import Category from '../Component/Category';
import Products from '../Component/Products';
import Tags from '../Component/Tags';
import Footer from '../Component/Footer';
import About from '../Component/About';
import Newsletter from '../Component/Newsletter';

export default function Home() {
  return (
    <>
      <Slider />
      <Category />
      <Products />
      <About />
      <Tags />
      <Newsletter />
      <Footer />
    </>
  );
}
