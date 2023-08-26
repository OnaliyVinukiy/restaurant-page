import React from 'react'
import ProfilePic from '../Assets/john-doe-image.png';
import {AiFillStar} from "react-icons/ai"
const Testimonials = () => {
  return (
    <div className="work-section-wrapper">
        <div className="work-section-top">
            <p className="primary-subheading">Testimonial</p>
            <h1 className="primary-heading">What Customers Say</h1>
            <p className="primary-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, pariatur.</p>

        </div>
        <div className="testimonial-section-bottom"> 
            <img src={ProfilePic} alt=""/>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae voluptatum iste officiis fugit aperiam est, excepturi natus aspernatur nobis, porro nemo sapiente facere earum distinctio aliquam ipsam sequi optio cum!
            </p>
            <div className="testimonials-stars-container">
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
            <h2>John Doe</h2>
        </div>
    </div>
  )
}

export default Testimonials