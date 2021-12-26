import './contact.css'
import emailjs from "emailjs-com";
import React, { Component } from 'react';
import LOCATION from './location.png';
import EMAIL from './email.png';
import PHONE from './phone.png';
import FACEBOOK from './facebook.png';
import INSTAGRAM from './instagram.png';
import TWITTER from './twitter.png';
import SNAPCHAT from './snapchat.png';
import GMAP from './map2.png';

export default function contactUs(){

  function sendEmail(e) {
    e.preventDefault();

  emailjs.sendForm('gmail', 'template_pd5qqze', e.target, 'user_lv0qLj3ZTT8mA5CwY1nhz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
    return (
      <div style={{ backgroundImage: `url(${GMAP})`, width:'100%', height:'auto', minHeight: '100%',
      minWidth: '1024px', position: 'fixed', top: '0', left: '0'}}>
        <div className="meh" style={{ marginTop: '170px'}}>
        <h4 className="text">We are here to listen to you</h4>
          <div className="containers">
              <div className="container_1">
                <h4 style={{fontWeight: '700'}}>Message Us</h4>
                <div className="message">
                <form onSubmit={sendEmail}>
                    <input type="text" placeholder="Full Name"/>
                    <input type="text" placeholder="Email Address"/>
                    <input type="text" placeholder="Phone Number"/>
                    <select className="City">
                      <option disabled selected style={{color:'#777c80'}}>Select City</option>
                      <option>Karachi</option>
                      <option>Lahore</option>
                      <option>Islamabad</option>
                      <option>Peshawar</option>
                      <option>Multan</option>
                    </select>  
                    <textarea name="msg" placeholder="Enter your message here..."></textarea>
                    <input type="submit" value="Submit" />
                </form>
                </div>
              </div>

              <div className="container_2">
                <h4>Contact Us</h4>
                <div className="info">
                    <img src={LOCATION} alt="location" width="4%"/>
                    <span>123, stree#A, Karachi, Pakistan</span>
                </div>
                <div className="info">
                    <img src={EMAIL} alt="email" width="4%"/>
                    <span>iRent@gmail.com</span>
                </div>
                <div className="info">
                    <img src={PHONE} alt="phone" width="4%"/>
                    <span>0123456789</span>
                </div>
                <div>
                    <h5>Find us on</h5>
                    <img src={FACEBOOK} alt="fb" width="5%"/>
                    <img src={TWITTER} alt="tt" width="5%"/>
                    <img src={INSTAGRAM} alt="ig" width="5%"/>
                    <img src={SNAPCHAT} alt="sc" width="5%"/>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
};