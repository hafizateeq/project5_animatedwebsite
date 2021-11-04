import React from 'react';
import head_img from '../src/images/head-img2.svg';
import Common from './Common';
const About = () => {
  return (
    <>
      <Common 
       name="Welcome to About Page"
       imgsrc={head_img}
       visit="/contact"
       btname="Contact Now"
      />
    </>
  )
}
export default About;
