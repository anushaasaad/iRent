import React from 'react';
import './style.css'
import { Button } from 'react-bootstrap';
import {useState} from 'react';
import Axios from "axios";
import { useHistory } from 'react-router';


function Airbnbinsert() {
    const navigate = useHistory();
    const [type,settype] = useState("");
    const [rooms,setrooms] = useState("");
    const [Carrate,setrate] = useState("");
    const [Class,setclass] = useState("");
    const [addstatus, setaddstatus] = useState("");
    const handleChange = (event) => {
        setclass(event.target.value);
    }
    const Add = async (e) => {
        e.preventDefault();
        const data = await Axios.post("http://localhost:5001/airbnbAdd", {
        type :type,
        rooms:rooms,
        class:Class,
        rate: Carrate,
        })
        if(data.data.msg){
            setaddstatus(data.data.msg);
        }else{
            navigate.push('./Admin');
        }
    };
    return (
        <div className="checkout">
            <div className="max-width">
        <div className="adminform">
            <div className="add">
        <div className="card">
            <div className="box">
        <h1>Welcome to Airbnb insertion Module</h1>
        <h6>Enter Details for the Airbnb you want to insert to your database</h6>
        <form>
        <div className="form">
            <label  className="col-sm-5 col-form-label text">Type:</label>
                <div className="col-8 form-group pt-2 mx-auto">
                <select value={type} onChange={(e) => {settype(e.target.value);}}>
                    <option value="hotel">hotel</option>
                    <option value="banglow">banglow</option>
                    <option value="villa">villa</option>
                    <option value="house">house</option>
                </select>
                </div>
            <label className="col-sm-5 col-form-label text">Rooms:</label>
            <div className="col-8 form-group pt-2 mx-auto">
                <input type="number" className="form-control" placeholder="XX" onChange={(e) => {setrooms(e.target.value);}}/>
            </div>
            <label  className="col-sm-5 col-form-label text">Rate per day:</label>
            <div className="col-8 form-group pt-2 mx-auto">
                <input type="text" className="form-control" placeholder="Rs. XXXXXX" onChange={(e) => {setrate(e.target.value);}}/>
            </div>
            <label  className="col-sm-5 col-form-label text">Class:</label>
            <div className="col-8 form-group pt-2 mx-auto">
            <select value={Class} onChange={(e) => {setclass(e.target.value);}}>
                <option value="luxury">luxury</option>
                <option value="economy">economy</option>
                <option value="platinum">platinum</option>
                <option value="silver">silver</option>
            </select>
            </div>
        </div>
    <Button variant="btn btn-success" onClick = {Add} style={{marginLeft:"70%"}}>Add Airbnb</Button>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Airbnbinsert;