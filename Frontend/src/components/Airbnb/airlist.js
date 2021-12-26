import React from 'react'
import {DropdownButton , Dropdown} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useState ,useEffect} from "react";
import {useParams} from 'react-router-dom';
import appt2 from './appt2.jpg';
import appt from './appt.jpeg';
import villa from './villa.jpg';
import banglow from './banglow.jpg';
import banglow2 from './banglows2.jpeg';
import hotel from './hotel.jpeg';
import Axios from "axios";
import './airbnb.css';
export default function Airlist() {
    const type = useParams();
    const [city,setcity] = useState("");
    const [FetchData,setData] = useState("");
    const [location,setlocation] = useState("");
    useEffect(() => {
        fetching();
      }, []);
    const fetching = () => {
        Axios.post("http://localhost:5001/Airbnb" ,type)
            .then((res) => {
                console.log(res);
                setData(res.data);
                console.log(FetchData);
            })
            .catch((err) => {
                console.log(err);
            });
        };
        const ascending = () => {
            Axios.post("http://localhost:5001/ascending",type)
                .then((res) => {
                    console.log(res);
                    setData(res.data);
                    console.log(FetchData);
                })
                .catch((err) => {
                    console.log(err);
                });
            };
        const descending = () => {
                Axios.post("http://localhost:5001/descending",type)
                    .then((res) => {
                        console.log(res);
                        setData(res.data);
                        console.log(FetchData);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
                };
        const fetchingK = () => {
            Axios.post("http://localhost:5001/lockarachi",type)
                .then((res) => {
                console.log(res);
                setData(res.data);
                console.log(FetchData);
            })
                .catch((err) => {                    
                console.log(err);
                });
                    };
                    const fetchingL = () => {
                        Axios.post("http://localhost:5001/locLahore",type)
                            .then((res) => {
                            console.log(res);
                            setData(res.data);
                            console.log(FetchData);
                            })
                            .catch((err) => {                    
                            console.log(err);
                        });
                    };
                    const fetchingisl = () => {
                        Axios.post("http://localhost:5001/locislamabad",type)
                            .then((res) => {
                            console.log(res);
                            setData(res.data);
                            console.log(FetchData);
                            })
                            .catch((err) => {                    
                            console.log(err);
                        });
                    };
                    const fetchinghunza = () => {
                        Axios.post("http://localhost:5001/lochunza",type)
                            .then((res) => {
                            console.log(res);
                            setData(res.data);
                            console.log(FetchData);
                            })
                            .catch((err) => {                    
                            console.log(err);
                        });
                    };
            
        const select =(obj) => {
            if(obj == 'house'){
                return appt;
            }
            if(obj == 'banglow'){
                return (banglow);

            }
            if(obj == 'villa'){
                return villa;
            }
            if(obj == 'hotel'){
                return hotel ;
            }
        }
    return (
        <div className='AirbnbList'>
            Select the Best Suited Rentals for you.
        <div className="filters">
        <DropdownButton id="dropdown-basic-button" className="drop" title="Location">
            <Dropdown.Item onClick={fetchingK}>Karachi</Dropdown.Item>
            <Dropdown.Item onClick={fetchingL}>Lahore</Dropdown.Item>
            <Dropdown.Item onClick={fetchingisl}>Islamabad</Dropdown.Item>
            <Dropdown.Item onClick={fetchinghunza}>Hunza</Dropdown.Item>
        </DropdownButton>
        <DropdownButton id="dropdown-basic-button" className="drop" title="Price">
            <Dropdown.Item onClick={ascending}>low to high</Dropdown.Item>
            <Dropdown.Item onClick={descending}>high to low</Dropdown.Item>
        </DropdownButton>
        <DropdownButton id="dropdown-basic-button" className="drop" title="Class">
            <Dropdown.Item>Platinum</Dropdown.Item>
            <Dropdown.Item>Silver</Dropdown.Item>
            <Dropdown.Item>Luxury</Dropdown.Item>
            <Dropdown.Item>Economy</Dropdown.Item>
            <Dropdown.Item>Standard</Dropdown.Item>
        </DropdownButton>
       {/* <button className="filterbtn" onClick={fetching} >Show Item</button>*/}
        </div>
        <div class="Services">
			<div class="servcontent" >
            {FetchData
            ? FetchData.map((obj) => (
				<div class="card">
					<div class="box">
						<img src={select(obj.type)}/>
							<div class="text">Rooms: {obj.rooms}</div>
                            <div class="text">{obj.class}</div>
							<h4>Price: {obj.rate} per day</h4>
							<Button href={"http://localhost:3000/airbnbcheckout/" + obj.idAirbnb} className="button" >Book Airbnb</Button>
					</div>
				</div>
                ))
                : ""}
                </div>
            </div>
        </div>
    )
}
