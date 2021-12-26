import React from 'react'
import { useHistory } from 'react-router';
import { Button } from 'react-bootstrap';
import './login.css';
import List from '../Rentcar/List.js';
import { useState } from "react";
import Axios from "axios";

function Signup() {
    const navigate = useHistory();
    const [regEmail, setregEmail] = useState("");
    const [regPassword, setregPassword] = useState("");
    const [regloginstatus, setregloginstatus] = useState("");
    const insert = async (e) => {
        e.preventDefault();
        console.log(regEmail);
        console.log(regPassword);
        const data = await Axios.post("http://localhost:5001/Signup", {
        email: regEmail,
        password: regPassword,
        })
        if(data.data.msg){
            setregloginstatus(data.data.msg);
        }else{
            navigate.push('./List');
        }
  };
    return (
        <div className="login">
                <div class="max-width">
                    <h2>Log in or create an account</h2>
                    <form>
                    <div className="form">
                        <label for="email" className="">Email Address:</label>
                        <div className="col-3 form-group pt-2 mx-auto">
                            <input required
                             type="email" 
                            className="form-control" 
                            placeholder="ABC@XYZ.COM" 
                            name="Email" 
                            onChange={(e) => {setregEmail(e.target.value);
                            }}/>
                            </div>
                        <label for="password" className="">Password:</label>
                        <div className="col-3 form-group pt-2 mx-auto">
                            <input required 
                            type="password" 
                            className="form-control" 
                            placeholder="**********" 
                            name="password"  
                            onChange={(e) => {setregPassword(e.target.value);
                            }}/>
                        </div>
                        <div className="col-2 form-group pt-2 mx-auto button">
                        <Button variant="btn btn-success" onClick={insert}>Continue</Button>
                        </div>

                    </div>
                </form>
                </div>
                <h3>{regloginstatus}</h3>
        </div>
    )
}
export default Signup;
