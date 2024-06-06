// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets';
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Indulge in our exquisite culinary creations crafted with the finest
            ingredients. Experience unparalleled taste, convenience, and
            freshness with our diverse menu, prompt delivery, and commitment to
            exceptional quality. Elevate your dining experience with us today.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>Get in Touch</h2>
          <ul>
            <li>+9199999000000</li>
            <li>contact@Eatzilla.com</li>
          </ul>
        </div>
          </div>
          <hr />
          <p className='footer-copyright'>Copyright 2024 @Eatzilla.com - All Rights Reserved</p>
    </div>
  );
}

export default Footer
