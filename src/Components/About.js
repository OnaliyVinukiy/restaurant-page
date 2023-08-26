import React from 'react'
import AboutBackground from '../Assets/about-background.png';
import AboutBackgroundImage from '../Assets/about-background-image.png';
import { BsFillPlayCircleFill } from 'react-icons/bs';
function About() {
  return (
    <div className="about-section-container">
        <div className="about-background-image-container">
            <img src={AboutBackground} alt=""/>
        </div>
        <div className="about-section-image-container">
            <img src={AboutBackgroundImage} alt=""/>

        </div>
        <div className="about-section-text-container">
            <p className="primary-subheading">About Us</p>
            <h1 className="primary-heading">We Cook The Best Tasty Food</h1>
            <p className="primary-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, pariatur? Totam temporibus eaque nesciunt adipisci optio explicabo aspernatur harum! </p>
            <p className="primary-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, pariatur? Totam temporibus eaque nesciunt adipisci optio explicabo aspernatur harum! </p>
            <div className="about-buttons-container">
                <button className="secondary-button">Learn More</button>
                <button className="watch-video-button"><BsFillPlayCircleFill/>Watch Video</button>

            </div>
        </div>
    </div>
  )
}

export default About