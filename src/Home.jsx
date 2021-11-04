import React from 'react';
import head_img from '../src/images/head-img.svg';
import Common from './Common';
const Home = () => {
  return (
    <>
      <Common 
      name="Grow your business with"
      imgsrc={head_img}
      visit="/services"
      btname="Get Started"
      />
    </>
  )
}
export default Home;
