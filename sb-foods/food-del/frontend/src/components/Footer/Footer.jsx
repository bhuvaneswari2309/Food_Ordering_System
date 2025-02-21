import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <p>

1. Have a question or feedback? We're here to help! Reach out to us for any inquiries about orders, deliveries, or our services.<br></br>
2. Contact our customer support team directly via phone or email for assistance with your orders or any issues you encounter.<br></br>
3. Your satisfaction is our priority. Get in touch with us today and let us ensure your food delivery experience is seamless and enjoyable.</p>
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
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-246-456-7890</li>
            <li>contact@SbFoods.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © SbFoods.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
