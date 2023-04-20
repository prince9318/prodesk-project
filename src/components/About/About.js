import React, { Fragment } from 'react'
import "./About.css"
const About = () => {
  return (
    <Fragment>
      <div className='about-us'>
        <div className='heading'>
          <h1>About Us</h1>
          <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className='about-us-1'>
          <img src='https://cdn.vox-cdn.com/thumbor/VlKuth0Eihu9mv3wZi-2zWWzgeg=/0x0:3000x1688/1200x675/filters:focal(1260x604:1740x1084)/cdn.vox-cdn.com/uploads/chorus_image/image/71158117/STORY_4_SET_2.0.png' alt='pic'/>
          <div className='content'>
              <h2>LOREM IPSUM DOLOR SIT AMET</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
              </p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
              </p>
          </div>
        </div>
      </div>

    </Fragment>
  )
}

export default About;