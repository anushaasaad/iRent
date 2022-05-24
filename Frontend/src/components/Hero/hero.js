import React from 'react'
import './hero.css';
import Calendar  from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Services from './services.js';
import BackgroundSlideshow from 'react-background-slideshow';
import BackgroundSlider from 'react-background-slider';
import Cars from './cars';
import Carscontent from './Carscontent.js';
import image1 from './hero.jpeg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'
import Airbnbtype from './Airbnbtype.js';
import Airbnbdestinations from './Airbnbdestinations';
import Contactpath from './contactusPath.js';
import Header from '../../header.js'
function hero() {
    return (
        <div>
        <Header />
        <div className="Hero">
            <div className="section">
            <BackgroundSlider images={[image1, image2, image3]} duration={3} transition={2} style={{height:'100px'}}/>
            <h1><a href="http://localhost:3000/Signup">Sign up</a> to receive updates on our <blink>newest offers</blink></h1> 
              { /*<Calendar /><h1><span>L</span>ocal the <span>B</span>est and <span>P</span>ersonalized <span>S</span>ervice.</h1> */}
            </div>            
        </div>
        <Services />
        <Cars />
        <Carscontent />
        <Airbnbtype />
        <Airbnbdestinations />
        <Contactpath />
        

        </div>
    )
}
export default hero;
