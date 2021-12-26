import emailjs from "emailjs-com";
import React from 'react';

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
            <h1>Feel Free to<span> drop us</span> an email.</h1>
            <form onSubmit={sendEmail}>
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
            </div>
        </div>
        
    );
};