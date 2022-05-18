import React from 'react'
import Civic from './civic.jpeg';
import Citycar from './city.jpeg';
import Sportage from './sportage.jpg';
import Mercedes from'./mercedes.jpg';
import Corolla from './corolla.jpg';
import Seats from './seats.png';
import Jeep from './jeep.png';
import Manual from './manual.png';
import Mileage from './mileage.png';
import Quality from './quality.png';
import Card from './card.png';
import Visa from './visa.png';
import Credit from './creditcard.png';
import { Button } from 'react-bootstrap';
import { useState ,useEffect}  from "react";
import { useHistory } from 'react-router';
import {useParams} from 'react-router-dom';
import Axios from "axios";
import './style.css';
import { getFID } from 'web-vitals';

function Checkout(props) {
    let no_plate = useParams();
    let navigate = useHistory();
    const [FetchData,setData] = useState("");
    const [Fullname, setname] = useState("");
    const [Startdate, setstartdate] = useState("");
    const [Enddate, setenddate] = useState("");
    const [Email,setemail] = useState("");
    const [Days, setdays] = useState("");
    const [status, setstatus] = useState("");
    const [numberplate,setnumberplate] = useState("");
    const [Price,setprice] = useState("");
    const [contact,setcontact] = useState("");
    const [cnic,setcinc] = useState("");
    const [checkemail,setcheckemail] = useState("");
    const [holder,setholder] = useState("");
    const [cardno,setcardno] = useState("");
    const [invalid,setinvalid] = useState("");
    useEffect(() => {
        console.log(no_plate);
        Axios.post("http://localhost:5001/Checkout",no_plate)
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
        if(contact.length<11 || cnic.length<13 ){ 
            window.alert("Please fill valid information")
            setinvalid("Invalid information")
        }else{
        const avalaible = Axios.post("http://localhost:5001/checkavailability",{
            startdate: Startdate,
            enddate: Enddate,
            no_plate: no_plate,   
        }).then((res) => {    
            //console.log(res);
            //setnumberplate(res.data);
            //console.log(res.data);
            if(!res.data.msg){
                //setnumberplate(res.data);
                const days = Axios.post("http://localhost:5001/calculatedays",{
                startdate: Startdate,
                enddate: Enddate,
                no_plate: no_plate,
            }).then((response) => {
                let number = parseInt(response.data);
                setdays(number);
                console.log(Days);
                let Bill = Days * FetchData.rate;
                setprice(Bill);
                console.log(Bill);
                let num  = String(number);
                insert(num);
                setinvalid(" ")
                setstatus(" ");
            })
        }else {
            setstatus("Car not found on the date you selected");
        }
        })
    }

    }
    const insert = (obj) => {
        const data = Axios.post("http://localhost:5001/insert", {
        fullname:Fullname,
        startdate: Startdate,
        enddate: Enddate,
        no_plate: no_plate,
        email: Email,
        days: obj,
        })
        if(data.msg){
            console.log("donothing");
        }else{
            alert("Your car has been booked!!");
        }
    }
    const Pricing = (obj) =>{
        return Days * obj;
    }
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
    const handleChangename = (e) => {
        const value = e.target.value.replace(/[^a-zA-Z]/gi, '');
        setname(value);
      };
    const handleChangeholder = (e) => {
        const value = e.target.value.replace(/[^a-zA-z]/gi, '');
        setholder(value);
      };
    const handleChangecontact = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        if(e.target.value.length===12){ 
            window.alert("Username shouldn't exceed 11 characters")
          }
        setcontact(value);
      };
    const handleChangecnic = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        if(e.target.value.length===14){ 
            window.alert("Username shouldn't exceed 11 characters")
          }
        setcinc(value);
      };
    const handleChangecardno = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        setcardno(value);
      };
    return (
        <div className="checkout">
            <div className="max-width">
            <h1>Checkout</h1>
      <div className="tag">Next confirmation... </div> 
      {FetchData
            ? FetchData.map((obj) => (
      <div className="Carsrent">
            <div className="carlist">
                    <div className="outer">
                            <div className="inner">
                                <div className="left">
                                    <img src={Findimage(obj.name)} />
                                    </div>
                                <div className="right">
                                <h1>{obj.name}</h1>
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
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="calculate">
                        <div className="card">
                            <div className="box">
                                <p className="text1">How would you like to pay?</p>
                                <div className="pricing">
                                    <div style={{fontSize:"22px"}}>Car rental price </div>
                                    <div className="cal">Rs. {Pricing(obj.rate)}</div>
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
                    <h1>Main drivers details</h1>
                    <form>
                    <div className="form">
                        <label 
                        for="first name" 
                        className="col-sm-5 col-form-label text" >
                            Full Name:</label>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" value={Fullname} onChange={handleChangename} className="form-control" placeholder="Full name"  name="requiredField" />
                            </div>
                        <label for="email" className="col-sm-5 col-form-label text"> Email Address:</label>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="abc@xyz.com" name="requiredField"/>
                        </div>
                        <label for="contact" className="col-sm-5 col-form-label text">Contact Number:</label>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <p style={{color:"red"}} >{invalid}</p>
                            <input type="text" value={contact} className="form-control" placeholder="03XX-XXXXXXX"  onChange={handleChangecontact} name="requiredField" />
                        </div>
                        <label for="cnic" className="col-sm-5 col-form-label text">CNIC Number:</label>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <p style={{color:"red"}} >{invalid}</p>
                            <input type="text" value={cnic} className="form-control" placeholder="XXXXX-XXXXXXX-X"  onChange={handleChangecnic} name="requiredField" />
                        </div>
                        <label for="startdate" className="col-sm-5 col-form-label text">From:</label>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <p style={{color:"red"}} >{status}</p>
                            <input type="date" className="form-control" onChange={(e) => {setstartdate(e.target.value)}} name="requiredField" />
                        </div>
                        <label for="finishdate" className="col-sm-5 col-form-label text">To:</label>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <p style={{color:"red"}} >{status}</p>
                            <input type="date" className="form-control" onChange={(e) => {setenddate(e.target.value)}} name="requiredField"/>
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
                            <label for="holdername" class="col-sm-5 col-form-label text" >Cardholder's name:</label>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="text" className="form-control" value={holder} onChange={handleChangeholder} name="requiredField"/>
                            </div>
                            <label for="cardno" class="col-sm-5 col-form-label text">Card Number:</label>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="text" placeholder="XXXXXXXXXXXXX" className="form-control"  value={cardno} onChange={handleChangecardno} name="requiredField"/>
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
                <Button variant="btn btn-success" style={{marginLeft:"70%"}} onClick={Checking}>Book Car</Button>
            </div> 
         </div>
     </div>
    )
}
export default Checkout;