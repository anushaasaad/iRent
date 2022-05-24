import React from 'react'
import { useState,useEffect } from "react";
import Axios from "axios";
import './style.css'
export default function Details() {
  const [fetchData, setData] = useState("");
  useEffect(() => {
    fetching();
  }, []);
const  fetching = () => {
Axios.post("http://localhost:5001/Details")
    .then((res) => {
        console.log(res);
        setData(res.data);
        console.log(fetchData);
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
    <th>Number Plate</th>
    <th>Days</th>
  </tr>
         {fetchData
            ? fetchData.map((obj) => (
                <tr>
                <td>{obj.idbooking}</td>
                <td>{String(obj.date_start)}</td>
                <td>{obj.date_end}</td>
                <td>{obj.no_plate}</td>
                <td>{obj.days}</td>
              </tr>

    ))
    : ""} 
    </table>
            </div>
  )
}
