import React from 'react'
import { useHistory } from 'react-router';
import { Button } from 'react-bootstrap';
import { useState,useEffect } from "react";
import Axios from "axios";
function Login(props) {
    const navigate = useHistory();
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [loginstatus, setloginstatus] = useState("");
    const [fetchData, setData] = useState("");
    useEffect(()=>{
        if(!localStorage.getItem('user-info')){
            navigate.push('./Signup')
        }
    })
    let Cmp = props.Cmp;
    return (
       <div>
           <Cmp />
       </div>
    )
}
export default Login;
