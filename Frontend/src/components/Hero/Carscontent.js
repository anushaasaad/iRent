import React from 'react'
import About from './about.jpg';
import Main from '../Rentcar/main.js';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function Carscontent() {
    let navigate = useHistory();
    return (
            <div className="about" style={{display: 'flex'}}>
                <div className="max-width">
                        <h1 className="title">Why choose us</h1>
                    <div className="about-content">
                        <div className="left">
                            <img src={About} /></div>
                        <div className="right">
                            <div className="text">Roadside Mission is to provide <span>Low cost </span> and <span>effective rental solutions</span> for Everyone with <span>Modern Cars.</span><p>lorem lipsumorem Ipsum is simply standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make, lorem lipsumorem Ipsum is simply standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
                            <Button variant="btn btn-success" onClick={() => navigate.push('/List')}>Book Ride</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default Carscontent;