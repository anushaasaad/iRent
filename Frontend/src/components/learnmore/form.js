import emailjs from "emailjs-com";
import React from 'react';
import LOCATION from './location.png';
import EMAIL from './email.png';
import PHONE from './phone.png';
import FACEBOOK from './facebook.png';
import INSTAGRAM from './instagram.png';
import TWITTER from './twitter.png';
import SNAPCHAT from './snapchat.png';

export default function ContactUs() {

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
    return(
      <div className="Form">
            <div className="container">
            <form onSubmit={sendEmail}>
            <h1>Feel Free to<span> drop us</span> an email.</h1>
                    <div className="row pt-5 mx-auto .max-width">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Full Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Your Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Contact no" name="number"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto button">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
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
        
    );
};