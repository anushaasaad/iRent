import React from 'react'
import { Button } from 'react-bootstrap';
import {useState} from 'react';
import Axios from "axios";
import { useHistory } from 'react-router';

export default function Cardelete() {
    const [Email,setemail] = useState("");
    const Del = async (e) => {
        e.preventDefault();
        const data = await Axios.post("http://localhost:5001/deletecarbooking", {
            email: Email,   
        })
        if(data.data.msg){
            alert("Your booking has been deleted");
        }
    };
    return (
        <div className="checkout">
            <div className="max-width">
        <div className="adminform">
            <div className="add">
        <div className="card">
            <div className="box">
        <h1>Welcome to Car Booking Deletion Module</h1>
        <h6>Enter Details for the Car Booking you want to deletion to your database</h6>
        <form>
        <div className="form">
            <label  className="col-sm-5 col-form-label text">Email:</label>
            <div className="col-8 form-group pt-2 mx-auto">
                <input type="text" className="form-control" placeholder="ABC@XYZ.COM" onChange={(e) => {setemail(e.target.value);}}/>
            </div>
        </div>
    <Button variant="btn btn-success"  onClick={Del} style={{marginLeft:"70%"}}>Delete</Button>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
