import React from 'react'
import Logo from '../Assets/Logo.svg';
import {BsTwitter} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";
import {BsYoutube} from "react-icons/bs";
import {FaFacebook} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer-wrapper">
        <div className="footer-section-one">
            <div className="footer-logo-container">
                <img src={Logo} alt="logo"/>
            </div>
            <div className="footer-icons">
                <BsTwitter/>
                <BsLinkedin/>
                <BsYoutube/>
                <FaFacebook/>

            </div>
        </div>
        <div className="footer-section-two">
            <div className="footer-section-columns">
                <span>Quality</span>
                <span>Help</span>
                <span>Share</span>
                <span>Careers</span>
                <span>Testimonials</span>
                <span>Work</span>
            </div>
            <div className="footer-section-columns">
                <span>011-123-1234</span>
                <span>Hello@food.com</span>
                <span>press@food.com</span>
                <span>contact@food.com</span>
            </div>
            <div className="footer-section-columns">
            <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
                </div>

        </div>
    </div>
  )
}

export default Footer
