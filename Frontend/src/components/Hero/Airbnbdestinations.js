import React from 'react'
import Karachi from './Karachi.jpg';
import Islamabad from './islamabad.jpg';
import Lahore from './lahore.jpg';
import Hunza from './hunza.jpg';
import Gilgit from './gilgit.jpg'
import Skardu from './skardu.jpg';
import './hero.css';

function Airbnbdestinations() {
    const karachi = "Karachi";
    const carsimages=[Karachi, Hunza,Skardu,Gilgit,Islamabad ,Lahore];
    return (
    <div className="destinations">
        <div className="max-width">
        <h2>Our Destination Locations</h2>
			<h1>These <span>popular destinations</span> have a lot to offer</h1>
            <div className="card" style={{width:"50%"}}>
                <div className="box">
                    <a href=""><img src={carsimages[0]} style={{},{width:'98%'}} /></a>
                    <h2 id="location1"><span>Karachi</span></h2>
                </div>
            </div>
            <div className="card" style={{width:"45%"}}>
                <div className="box">
                    <a href=""><img src={carsimages[1]} style={{width:'100%'},{height:"400px"}} /></a>
                    <h2 id="location2"><span>Hunza</span></h2>
                    </div>
            </div>
            <div className="card" style={{width:"95%"}}>
                <div className="box">
                    <a href=""><img src={carsimages[2]} style={{width:'99%'}} /></a>
                    <h2 id="location3"><span>Skardu</span></h2>
                    </div>
            </div>
            <div className="card" style={{width:"40%"}}>
                <div className="box">
                    <a href=""><img src={carsimages[3]} style={{width:'100%'},{height:'370px'}} /></a>
                    <h2 id="location4"><span>Gilgit</span></h2>
                    </div>
            </div>
            <div className="card" style={{width:"55%"}}>
                <div className="box">
                    <a href=""><img src={carsimages[4]} style={{width:'60%'},{height:'380px'}} /></a>
                    <h2 id="location5"><span>Islamabad</span></h2>
                 </div>
            </div>
            <div className="card" style={{width:"95%"}}>
                <div className="box">
                     <a href=""><img src={carsimages[5]} style={{width:'98%'}} /></a>
                     <h2 id="location6"><span>Lahore</span></h2>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Airbnbdestinations;