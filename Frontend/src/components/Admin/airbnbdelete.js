import React from 'react';
import './style.css'
import { Button } from 'react-bootstrap';
import {useState} from 'react';
import Axios from "axios";
import { useHistory } from 'react-router';


function AirbnbDelete() {
    const navigate = useHistory();
    const [idAirbnb, setid] = useState("");
    const [addstatus, setaddstatus] = useState("");
    const Delete = async (e) => {
        e.preventDefault();
        const data = await Axios.post("http://localhost:5001/airbnbdelete", {
            idAirbnb : idAirbnb,
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
                <div className="Delete">
                    <div className="card">
                        <div className="box">
                            <h1>Welcome to Airbnb Deletion Module</h1>
                            <h6>Enter Details for the Airbnb you want to Delete to your database</h6>
                            <form>
                            <div className="form">
                                <label  className="col-sm-5 col-form-label text">ID of your Airbnb:</label>
                                <div className="col-8 form-group pt-2 mx-auto">
                                    <input type="number" className="form-control" placeholder="ID" onChange={(e) => {setid(e.target.value);}}/>
                                </div>
                            </div>
                <Button variant="btn btn-success" onClick = {Delete} style={{marginLeft:"70%"}}>Delete Car</Button>
                                        </form>
                                    </div>
                                </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default AirbnbDelete;