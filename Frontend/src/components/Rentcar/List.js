import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './style.css'
import Civic from './civic.jpeg';
import Citycar from './city.jpeg';
import Sportage from './sportage.jpg';
import Corolla from './corolla.jpg';
import Seats from './seats.png';
import Manual from './manual.png';
import Jeep from './jeep.png';
import Mileage from './mileage.png';
import Quality from './quality.png';
import Mercedes from'./mercedes.jpg';
import { useState,useEffect } from "react";
import Axios from "axios";
import Checkout from './checkout.js';
import {DropdownButton , Dropdown} from 'react-bootstrap';
import Carscontent from '../Hero/Carscontent.js';
import { EmailJSResponseStatus } from 'emailjs-com';
function List(){
    const City = ['Karachi','Lahore','Islamabad','Multan'];
    const Cars=['City', 'Civic', 'Corolla', 'Sportage', 'Honda', 'Jeep', 'Mercedes'];
    const [fetchData, setData] = useState("");
    const [ID , setID] = useState("");
    useEffect(() => {
        fetching();
      }, []);
    const fetching = () => {
    Axios.post("http://localhost:5001/List")
        .then((res) => {
            console.log(res);
            setData(res.data);
            console.log(fetchData);
        })
        .catch((err) => {
            console.log(err);
        });
    };
    const fetchingK = () => {
        Axios.post("http://localhost:5001/Listkarachi")
            .then((res) => {
                console.log(res);
                setData(res.data);
                console.log(fetchData);
            })
            .catch((err) => {
                console.log(err);
            });
        };
    const fetchLahore = () => {
        Axios.post("http://localhost:5001/Listlahore")
            .then((res) => {
            console.log(res);
            setData(res.data);
            console.log(fetchData);
        })
                .catch((err) => {
                    console.log(err);
                });
            };
        const fetchislamabad = () => {
            Axios.post("http://localhost:5001/Listislamabad")
                .then((res) => {
                console.log(res);
                setData(res.data);
                console.log(fetchData);
                })
                .catch((err) => {
                console.log(err);
                });            
        };
    const Findimage = (name) => {
        if(name == 'corolla'){
           return Corolla;
            
        }
        if(name == 'city'){
            return Citycar;
             
         }
        if(name == 'sportage'){
            return Sportage;
        }
        if(name == 'Mercedes'){
            return Mercedes;
        }
        if(name == 'Jeep'){
            return Jeep;
        }
    }

    let navigate = useHistory();

    const move = () => {
        navigate.push('/Checkout/'+ fetchData.no_plate);
    }
  return (
    <div className="Carrent">
        Select the Best Suited car for you.
      <div className="tag">It is time to get a real car for you</div> 
      <div className="filter">
        <DropdownButton id="dropdown-basic-button" title="Location">
            <Dropdown.Item onClick={fetchingK} >{City[0]}</Dropdown.Item>
            <Dropdown.Item onClick={fetchLahore} >{City[1]}</Dropdown.Item>
            <Dropdown.Item onClick={fetchislamabad}>{City[2]}</Dropdown.Item>
            <Dropdown.Item href="#/action-3">{City[3]}</Dropdown.Item>
        </DropdownButton>
        <DropdownButton id="dropdown-basic-button" className="drop" title="Cars">
            <Dropdown.Item >{Cars[0]}</Dropdown.Item>
            <Dropdown.Item href="#/action-1">{Cars[1]}</Dropdown.Item>
            <Dropdown.Item href="#/action-1">{Cars[2]}</Dropdown.Item>
            <Dropdown.Item href="#/action-1">{Cars[3]}</Dropdown.Item>
            <Dropdown.Item href="#/action-1">{Cars[4]}</Dropdown.Item>
            <Dropdown.Item href="#/action-1">{Cars[5]}</Dropdown.Item>
            <Dropdown.Item href="#/action-1">{Cars[6]}</Dropdown.Item>
        </DropdownButton>
       {/* <button className="filterbtn" onClick={fetching} >Show Item</button>*/}
        </div>
      {fetchData
            ? fetchData.map((obj) => (
        <div className="Carsrent">
            <div className="max-width">
            <div className="carlist">
                    <div className="outer">
                            <div className="inner">
                                <div className="left">
                                     <img src={Findimage(obj.name)} />
                                    </div>
                                <div className="right">
                                <h1>{obj.name}  -  <span>{obj.model}</span></h1>
                                    <div className="text">
                                        <div className="type">
                                            <div>
                                                <img src={Seats} />
                                            </div>
                                                <div style={{marginTop:'10px'}}>
                                                    <p>{obj.seats} seats available</p></div>
                                            <div style={{marginLeft:'20px'}}>
                                                <img src={Mileage} />
                                            </div>
                                                <div style={{marginTop:'20px'},{marginLeft:'10px'}}>
                                                    <p>Unlimited Mileage</p>
                                                </div>
                                            </div>
                                        <div className="type">
                                            <div>
                                                <img src={Manual} />
                                            </div>
                                            <div style={{marginTop:'10px'},{marginLeft:'10px'}}>
                                                    <p>Manual</p>
                                                </div>
                                            <div style={{marginLeft:'80px'}}>
                                                <img src={Quality} />
                                            </div>
                                            <div style={{marginTop:'20px'},{marginLeft:'10px'}}>
                                                    <p>100%</p>
                                                </div>
                                        </div>
                                </div>
                            </div>
                            <div className="price">
                                        <p>Price per day<span>   Rs.{obj.rate}</span></p>
                                        <h6>Free amendements</h6>
                                        <Button href={"http://localhost:3000/CarCheckout/" + obj.no_plate} variant="btn btn-success" >Book Car</Button>
                                    </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
    ))
    : ""}
    </div>
    )};
export default List;