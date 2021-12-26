import React from 'react'
import Card from './card.png';
import Visa from './visa.png';
import Credit from './creditcard.png';
import { Button } from 'react-bootstrap';
import appt2 from './appt2.jpg';
import appt from './appt.jpeg';
import villa from './villa.jpg';
import banglow from './banglow.jpg';
import banglow2 from './banglows2.jpeg';
import hotel from './hotel.jpeg';
import { useState ,useEffect}  from "react";
import {useParams} from 'react-router-dom';
import { useHistory } from 'react-router';
import Axios from "axios";

function Checkout(props) {
    let navigate = useHistory();
    let idAirbnb = useParams();
    const [FetchData,setData] = useState("");
    const [Fullname, setname] = useState("");
    const [Startdate, setstartdate] = useState("");
    const [Enddate, setenddate] = useState("");
    const [Email,setemail] = useState("");
    const [Days, setdays] = useState("");
    const [status, setstatus] = useState("");
    const [numberplate,setnumberplate] = useState("");
    const [Price,setprice] = useState("");
    useEffect(() => {
        Axios.post("http://localhost:5001/airbnbCheckout",idAirbnb)
        .then((res) => {
            //console.log(res);
            setData(res.data);
            //console.log(FetchData);
        })
    }, [])
    const Checking = async (e) => {
        //console.log(Fullname);
        //console.log(Startdate);
        //console.log(Enddate);
        
        const avalaible = Axios.post("http://localhost:5001/airbnbavailability",{
            startdate: Startdate,
            enddate: Enddate,
            idAirbnb: idAirbnb,   
        }).then((res) => {
            //console.log(res);
            //setnumberplate(res.data);
            //console.log(res.data);
            if(!res.data.msg){
                //setnumberplate(res.data);
                const days = Axios.post("http://localhost:5001/calculateairbnbdays",{
                startdate: Startdate,
                enddate: Enddate,
                idAirbnb: idAirbnb,
            }).then((response) => {
                let number = parseInt(response.data);
                setdays(number);
                console.log(Days);
                let Bill = Days * FetchData.rate;
                setprice(Bill);
                console.log(Bill);
                let num  = String(number);
                insert(num);
            })
        }else {
            setstatus("Car not found on the date you selected");
        }
        })

    } 
    const insert = (obj) => {
        const data = Axios.post("http://localhost:5001/insertairbnb", {
        fullname:Fullname,
        startdate: Startdate,
        enddate: Enddate,
        idAirbnb: idAirbnb,
        email: Email,
        days: obj,
        })
        if(data.msg){
            
        }else{
            alert("Airbnb has been booked");
        }
    }
    const Pricing = (obj) =>{
        return Days * obj;
    }
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
        <div className="checkout">
            <div className="max-width">
            <h1>Checkout</h1>
      <div className="tag">Next confirmation... </div> 
      {FetchData
            ? FetchData.map((obj) => (
        <div className='airbnbrent'>
            <div className='airbnblist'>
                <div class="outer">
                <div class="inner">
                    <div className='left'>
                    <img src={select(obj.type)}/></div>
                    <div className='right'>
                    <h1>{obj.type}</h1>
                        <div class="text">
                        <h3>Rooms: {obj.rooms}</h3>
                        <h3>{obj.class}</h3></div>
                        <h4>Price: {obj.rate} per day</h4>
                        </div>
                </div>
            </div> 
            </div>
            <div className="calculate">
            <div className="card">
                <div className="box">
                    <p className="text1">How would you like to pay?</p>
                    <div className="pricing">
                        <div style={{fontSize:"22px"}}>Airbnb rental price </div>
                        <div className="cal">Rs.{Pricing(obj.rate)} </div>
                    </div>
                </div>
            </div>
        </div>
            </div>
         ))
         : ""}

                <div className="checkoutform">
                    <div className="card">
                        <div className="box">
                    <h1>Customer details</h1>
                    <form>
                    <div className="form">
                        <label 
                        for="first name" 
                        className="col-sm-5 col-form-label text" >
                            Full Name:</label>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Full name" name="full name" onChange={(e) => {setname(e.target.value)}}/>
                            </div>
                        
                        <label for="email" className="col-sm-5 col-form-label text"> Email Address:</label>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="abc@xyz.com" name="email" onChange={(e) => {setemail(e.target.value)}}/>
                        </div>
                        <label for="contact" className="col-sm-5 col-form-label text">Contact Number:</label>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="+92-XXXXXXXXXXX" name="contact"/>
                        </div>
                        <label for="cnic" className="col-sm-5 col-form-label text">CNIC Number:</label>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="XXXXX-XXXXXXX-X" name="cnic"/>
                        </div>
                        <label for="startdate" className="col-sm-5 col-form-label text">From:</label>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <p style={{color:"red"}} >{status}</p>
                            <input type="date" className="form-control" name="startdate" onChange={(e) => {setstartdate(e.target.value)}}/>
                        </div>
                        <label for="finishdate" className="col-sm-5 col-form-label text">To:</label>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <p style={{color:"red"}} >{status}</p>
                            <input type="date" className="form-control" name="finishdate" onChange={(e) => {setenddate(e.target.value)}}/>
                        </div>
                         
                    </div>
                </form>
                </div>
                </div>
                <div className="card">
                    <div className="box">
                            <p className="text1">How would you like to pay?</p>
                            <img src={Card} />
                            <img src={Visa} />
                            <img src={Credit} />
                        <div className="form">
                            <label for="holdername" class="col-sm-5 col-form-label text">Cardholder's name:</label>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="text" className="form-control" name="holdername" />
                            </div>
                            <label for="cardno" class="col-sm-5 col-form-label text">Card Number:</label>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="text" placeholder="XXXXXXXXXXXXX" className="form-control" name="cardno" />
                            </div>
                        </div>
                        </div>
                    </div>
                <div className="card">
                    <div className="box">
                    <p className="text1">Terms and Conditions</p>
                    <p className="text">By clicking ‘Book Now’, you are confirming that you have read, understood and accepted our <span style={{color:"blue"}}>General terms</span> </p>
                    </div>
                </div>
                <Button variant="btn btn-success" style={{marginLeft:"70%"}} onClick={Checking}>Book Airbnb</Button>
            </div>   
         </div>
     </div>
    )
}
export default Checkout;