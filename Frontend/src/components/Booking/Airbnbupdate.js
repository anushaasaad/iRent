import React from 'react';
import { Button } from 'react-bootstrap';
import {useState} from 'react';
import Axios from "axios";
import { useHistory } from 'react-router';


function Airbnbupdate() {
    const navigate = useHistory();
    const [rate,setrate]=useState("");
    const [days,setdays]=useState("");
    const [bill,setbill]=useState("");
    const [Startdate, setstartdate] = useState("");
    const [Enddate, setenddate] = useState("");
    const [Email,setemail] = useState("");
    const Add = async (e) => {
        e.preventDefault();
        const data = await Axios.post("http://localhost:5001/airbnbbooking", {
            startdate: Startdate,
            enddate: Enddate,
            email: Email,   
        })
        if(data.data.msg){
            //setaddstatus(data.data.msg);
        }else{
            //navigate.push('./Admin');
            //let number = data.days;
            let rate = data.data[0].rate;
            setrate(rate);
            //getid();
            //alert("updated");
            Axios.post("http://localhost:5001/getairbookingid", {
            email: Email,   
        }).then((res) => {
            console.log(res);
            setdays(res.data[0].days);
            let p = days * rate;
            setbill(res.data[0].days * rate);
        })

        }
  };
    return (
        <div className="checkout">
            <div className="max-width">
        <div className="adminform">
            <div className="add">
        <div className="card">
            <div className="box">
        <h1>Welcome to Airbnb Booking Update Module</h1>
        <h6>Enter Details for the Airbnb Booking you want to updation to your database</h6>
        <form>
        <div className="form">
            <label  className="col-sm-5 col-form-label text">Email:</label>
            <div className="col-8 form-group pt-2 mx-auto">
                <input type="text" className="form-control" placeholder="ABC@XYZ.COM" onChange={(e) => {setemail(e.target.value);}}/>
            </div>
            <label className="col-sm-5 col-form-label text">Start date:</label>
            <div className="col-8 form-group pt-2 mx-auto">
                <input type="date" className="form-control" onChange={(e) => {setstartdate(e.target.value);}} />
            </div>
            <label  className="col-sm-5 col-form-label text">End date:</label>
            <div className="col-8 form-group pt-2 mx-auto">
                <input type="date" className="form-control" onChange={(e) => {setenddate(e.target.value);}}/>
            </div>
            <h3 style={{fontSize:"18px"}}>Your updated Bill is Rs: {bill}</h3>
        </div>
    <Button variant="btn btn-success" onClick = {Add} style={{marginLeft:"70%"}}>Update</Button>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Airbnbupdate;