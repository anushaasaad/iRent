import React from 'react';
import './style.css'
import { Button } from 'react-bootstrap';
import {useState} from 'react';
import Axios from "axios";
import { useHistory } from 'react-router';


function Insert() {
    const navigate = useHistory();
    const [Carname,setname] = useState("");
    const [Carmodel,setmodel] = useState("");
    const [Carnumber,setnumber] = useState("");
    const [Carcolor,setcolor] = useState("");
    const [Carbrand,setbrand] = useState("");
    const [Carseats,setseats] = useState("");
    const [Carrate,setrate] = useState("");
    const [City,setcity] = useState("");
    const [numplate, setnumplate] = useState("");
    const [addstatus, setaddstatus] = useState("");
    const handleChange = (event) => {
        setcity(event.target.value);
    }
    const Add = async (e) => {
        e.preventDefault();
        const data = await Axios.post("http://localhost:5001/Add", {
        name: Carname,
        model: Carmodel,
        no_plate: Carnumber,
        color: Carcolor,
        brand: Carbrand,
        seats: Carseats,
        rate: Carrate,
        city: City,
        })
        if(data.data.msg){
            setaddstatus(data.data.msg);
        }else{
            navigate.push('./Admin');
        }
  };
    const Delete = async (e) => {
        e.preventDefault();
        const data = await Axios.post("http://localhost:5001/Delete", {
            no_plate : numplate,
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
        <h1>Welcome to Car insertion Module</h1>
        <h6>Enter Details for the Car you want to insert to your database</h6>
        <form>
        <div className="form">
            <label 
            for="first name" 
            className="col-sm-5 col-form-label text" >
                Model of your Car:</label>
            <div className="col-8 form-group pt-2 mx-auto">
                <input type="text" className="form-control" placeholder="Car Model" onChange={(e) => {setmodel(e.target.value);}}/>
                </div>
            
            <label className="col-sm-5 col-form-label text"> Number plate:</label>
            <div className="col-8 form-group pt-2 mx-auto">
                <input type="number" className="form-control" placeholder="XXXX" onChange={(e) => {setnumber(e.target.value);}}/>
            </div>
            <label   className="col-sm-5 col-form-label text">Colour of your Car:</label>
            <div className="col-8 form-group pt-2 mx-auto">
                <input type="text" className="form-control" placeholder="e.g:red,blue" onChange={(e) => {setcolor(e.target.value);}}/>
            </div>
            <label  className="col-sm-5 col-form-label text">Brand of your Car:</label>
            <div className="col-8 form-group pt-2 mx-auto">
                <input type="text" className="form-control" placeholder="e.g:honda, toyota" onChange={(e) => {setbrand(e.target.value);}}/>
            </div>
            <label className="col-sm-5 col-form-label text">Name of your Car:</label>
            <div className="col-8 form-group pt-2 mx-auto">
                <input type="text" className="form-control" placeholder="name" onChange={(e) => {setname(e.target.value);}} />
            </div>
            <label  className="col-sm-5 col-form-label text">Seats:</label>
            <div className="col-8 form-group pt-2 mx-auto">
                <input type="number" className="form-control" placeholder="Seats" onChange={(e) => {setseats(e.target.value);}}/>
            </div>
            <label  className="col-sm-5 col-form-label text">Rate per day:</label>
            <div className="col-8 form-group pt-2 mx-auto">
                <input type="text" className="form-control" placeholder="Rs. XXXX" onChange={(e) => {setrate(e.target.value);}}/>
            </div>
            <label  className="col-sm-5 col-form-label text">Location of your car:</label>
            <div className="col-8 form-group pt-2 mx-auto">
            <select value={City} onChange={(e) => {setcity(e.target.value);}}>
                <option value="500">Karachi</option>
                <option value="501">Lahore</option>
                <option value="502">Islamabad</option>
                <option value="503">Hunza</option>
                <option value="504">Skardu</option>
                <option value="505">Gilgit</option>
            </select>
            </div>
        </div>
    <Button variant="btn btn-success" onClick = {Add} style={{marginLeft:"70%"}}>Add Car</Button>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Insert;