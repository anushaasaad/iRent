import React from 'react'
import { useState,useEffect } from "react";
import Axios from "axios";
import './style.css'
function Airbnbdetails() {
  const [Data, setData] = useState("");
  useEffect(() => {
    fetchingairbnb();
  }, []);
const  fetchingairbnb = () => {
Axios.post("http://localhost:5001/AirbnbDetails")
    .then((res) => {
        console.log(res);
        setData(res.data);
        console.log(Data);
    })
    .catch((err) => {
        console.log(err);
    });
};
  return (

    <div>
        <table>
  <tr>
    <th>Booking ID</th>
    <th>Start Date</th>
    <th>End Date</th>
    <th>Airbnb ID</th>
    <th>Days</th>
  </tr>
         {Data
            ? Data.map((obj) => (
                <tr>
                <td>{obj.idbooking}</td>
                <td>{String(obj.datestart)}</td>
                <td>{obj.dateend}</td>
                <td>{obj.idAirbnb}</td>
                <td>{obj.days}</td>
              </tr>

    ))
    : ""} 
    </table>
            </div>
  )
}
export default Airbnbdetails;