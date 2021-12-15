import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";

const Booking = (props) => {
  const {name, _id, email, serviceName, servicePrice, image} = props.booking;
  const [loggedInUser] = useContext(UserContext);
  const [confirmedOrders, setConfirmedOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);


  useEffect(()=>{
    fetch('http://localhost:4040/confirmedOrders')
    .then(res => res.json())
    .then(data => setConfirmedOrders(data[0]))
  },[])

  useEffect(()=>{
    fetch('http://localhost:4040/completedOrders')
    .then(res => res.json())
    .then(data => setCompletedOrders(data[0]))
  },[])

  console.log(confirmedOrders);
  console.log(completedOrders);

  return (
    <>
      {loggedInUser.email === email && (
        <div className="col-md-4 service-card">
          <img src={`data:image/png;base64,${image}`} width="230px" height="120px" style={{borderRadius:'10px', marginBottom: '30px'}} alt="" />
          <p><strong>Booked Service: </strong>{serviceName}</p>
          <p><strong>Service Price:</strong> ${servicePrice}</p>
          <p><strong>Booking Author Name: </strong> <br /> {name}</p> 
          <p><strong>Booking Author Email:</strong> <br /> {email}</p>
          <div className="d-flex">
            <p className="my-2" ><strong>Order Status:</strong></p>
            {
              _id === confirmedOrders?.id && <button className="btn btn-warning">Order Confirmed</button> 
            }
            {
               _id === completedOrders?.id && <button className="btn btn-success">Done</button>  
            }
            {
              _id !== confirmedOrders?.id && _id !== completedOrders?.id && <button className="btn btn-primary">Pending</button>
            }
            
          </div>
        </div>
      )}
    </>
  );
};

export default Booking;
