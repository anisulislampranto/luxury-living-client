import React, { useEffect, useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Booking from '../Booking/Booking';
import Sidebar from '../Sidebar/Sidebar';

const Bookings = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(()=>{
        fetch('https://still-brook-35546.herokuapp.com/bookings')
        .then(res => res.json())
        .then(data => setBookings(data))
    },[])
    

    return (
        <div>
        <Navigation/>
        <div className='container-fluid row'>
            <div className='col-md-2 sidebar'>
                <Sidebar/>
            </div>
            <div className='col-md-10 row' style={{position: 'absolute', right:0}}>
                <h1>Bookings</h1>
                {
                    bookings.map(booking => <Booking booking={booking} key={booking._id}></Booking>)
                }
            </div>
        </div>
        </div>
    );
};

export default Bookings;