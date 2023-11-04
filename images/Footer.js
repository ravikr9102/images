import React from 'react';
import { useState, useRef, useEffect } from 'react';
import './Footer.css';
import FooterLogo from '../images/footer-logo.png';
import linkedIn from '../images/linkedIn.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import arrow2 from '../images/arrow2.png';
import phoneImg from '../images/phone.jpeg';
import mailImg from '../images/mail.jpeg';
import yellow from "../images/Yellow.png"
import luxembourg from '../images/lux.png';
import EU from '../images/EU.png';
import federation from '../images/federation.png';
import vector from '../images/Vector.png';
import daVinci from'../images/daVinci.png'
import luxinnovation from'../images/Luxinnovation.png'
import { Link } from "react-router-dom";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const menuRef = useRef(null);
  
    const toggleMenu = (event) => {
        event.stopPropagation();
        setIsOpen(!isOpen);
    };
  
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
        setSelectedItem(null);
      }
    };
  
    const handleItemClick = (item) => {
      setSelectedItem(item);
    };
  
    useEffect(() => {
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);
  return (
    <div className='footerhome'>
        {/* <a href="/"><img id='footer-logo' src={FooterLogo} alt="logo" /></a> */}
        <Link to="/"><img id='footer-logo' src={FooterLogo} alt="logo" /></Link>
        <div className='social-container'> 
          <a href="https://www.facebook.com/profile.php?id=100081159132820"><img id='facebook' src={facebook} alt="facebook" /></a>
          <a href="https://www.linkedin.com/company/kaash/"><img id='linkedIn' src={linkedIn} alt="linkedIn" /></a>
          <a href="https://www.instagram.com/kaash.eu/"><img id='instagram' src={instagram} alt="instagram" /></a>
        </div>
        <p id='copyright'>Copyright © 2023 Kaash® | Luxembourg</p>

        <div className='link-container'>
          <h3>Quick Links</h3>
          {/* <a className='quick-links' href={<Services />}>Services</a> */}
          <p className='quick-links'>Contact</p>

          {/* <p className="quick-links" onClick={toggleMenu}>Contact</p> */}

            {/* {isOpen && (
            <div ref={menuRef} className='pop'>
            <h1 className="us">
                    Contact us
                </h1>
                <div className="para">
                    <p>Let’s create your story
                <br/>
                with <strong>light</strong>. Get in touch </p>
                <img src={arrow2} alt="arrow"  id='arrow2'/>
                <div className='input-div'>
                  <input type="text" placeholder='Contact Name'/>
                  <input type="text" placeholder='Address'/>
                  <input type="text" placeholder='Country' id='country'/>
                  <input type="text" placeholder='Postal Code' id='postal' />
                  <input type="text" placeholder='Contact Phone'/>
                  <input type="text" placeholder='E-mail'/>
                  <input type="text" placeholder='Please leave your comment'/>
                </div>
                <div className="checkbox-div">
                <input type="checkbox" />
                <p id='checkbox'>Kindly contact me for my requirement</p>
                </div>

                <button className="submit">Submit</button>
                </div>


                <img src={yellow} alt="yellow" className="yellow" />

                <div className="contact-footer">
                  <div className="phone">
                  <div className='img-cont'>
                  <img src={phoneImg} alt="" />
                  <p>Phone</p>
                  </div>
                  <p>+352 691 566 820</p>
                  </div>

                  <div className="phone">
                  <div className='img-cont'>
                  <img src={mailImg} alt="" />
                  <p>E-mail</p>
                  </div>
                  <p>moien@kaash.eu</p>
                  </div>

                  <div className="phone">
                  <div className='img-cont'>
                  <img src={mailImg} alt="" />
                  <p>Address</p>
                  </div>
                  <p>41a rue des romains, L8041 Luxembourg</p>
                  </div>
                </div>
              
            </div>
            )} */}


          <p className='quick-links'>Projects</p>
          <Link to="/services" className='quick-links'>Services</Link>
          <p className='quick-links'>Company</p>
          <p className='quick-links'>Light Finder</p>
          <p className='quick-links'>Light Calculator</p>
        </div>

        <div className='img-container'>
          <img id='eu' src={EU} alt="eu" />
          <img id='daVinci' src={daVinci} alt="daVinci" />
          <img id='fed' src={federation} alt="federation" />
          <img id='luxinnovation' src={luxinnovation} alt="luxinnovation" />
        </div>

        <div className='subscribe-container'>
          <p id='subscribe'>Subscribe</p>
          <input type="email" name="email" id="email" placeholder='Your mail'/>
          <img id='arrow' src={vector} alt="arrow" />
          <p id='privacy'>By signing up to receive emails from Motto, you agree to our Privacy Policy. We treat your info responsibly. Unsubscribe anytime.</p>
        </div>
    </div>
  )
}

export default Footer;