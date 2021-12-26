import React from 'react'
import './hero.css';
import Facebook from './facebook.png';
import Insta from './instagram.png';
import Twitter from './twitter.png';
import Linkedin from './linkedin.png'
export default function follow() {
    return (
        <div className="follow">
            <a href="https://www.facebook.com/"><img src={Facebook} /></a>
            <a href="https://www.instagram.com/"><img src={Insta} /></a>
            <a href="https://twitter.com/?lang=en"><img src={Twitter} /></a>
            <a href="https://www.linkedin.com/feed/"><img src={Linkedin} /></a>
        </div>
    )
}
