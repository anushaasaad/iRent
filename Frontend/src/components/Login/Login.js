import React from 'react'
import { useHistory } from 'react-router';
import { Button } from 'react-bootstrap';
import './login.css';
import List from '../Rentcar/List.js';
import { useState,useEffect } from "react";
import Axios from "axios";
import Admin from '../Admin/admin.js';
import PropTypes from 'prop-types';
import Header from '../../header.js'
function Login() {
    const navigate = useHistory();
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [loginstatus, setloginstatus] = useState("");
    const [fetchData, setData] = useState("");
    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            navigate.push('/')
        }
    })
    const Signin = async (e) => {
        e.preventDefault();
        console.log(Email);
        console.log(Password);
        const data = await Axios.post("http://localhost:5001/Login", {
        email: Email,
        password: Password,
        })
        
        if(Email == 'admin@gmail.com' && Password == 'irent'){
            navigate.push('./Admin');
        }
        else if(data.data[0]){
            console.log(data.data[0]);
            localStorage.setItem('user-info',JSON.stringify(data.data[0]));
            navigate.push('./')

        }else if(Email == "" || Password == ""){
            setloginstatus("These field are required");
        }else
        {
            setloginstatus(data.data.message);
        }
        //navigate.push('./List');
  };

    return (
        <div>
        <Header />
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
                            onChange={(e) => {setEmail(e.target.value); 
                            }}/>
                            </div>
                        <label for="password" className="">Password:</label>
                        <div className="col-3 form-group pt-2 mx-auto">
                            <input required 
                            type="password" 
                            className="form-control" 
                            placeholder="**********" 
                            name="password"  
                            onChange={(e) => {setPassword(e.target.value);
                            }}/>
                        </div>
                        <div className="col-2 form-group pt-2 mx-auto button">
                        <Button variant="btn btn-success" onClick={Signin}>Continue</Button>
                        </div>

                    </div>
                </form>
                </div>
                <h3>{loginstatus}</h3>
        </div>
        </div>
    )
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
export default Login;
