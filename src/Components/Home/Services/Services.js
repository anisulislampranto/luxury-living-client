import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:4040/services')
        .then(res=> res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className='text-center my-4'>
            <p>Services</p>
            <h2>We're an agency tailored to all clients' needs that always delivers</h2>
            <div className="container-fluid row">
                {
                    services.map(service => <Service service={service} key={service._id}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;