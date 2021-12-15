import React, { useEffect, useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import ManageService from '../ManageService/ManageService';
import Sidebar from '../Sidebar/Sidebar';

const ManageServices = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:4040/services')
        .then(res=> res.json())
        .then(data => setServices(data))
    },[])
    
    return (
        <div>
            <Navigation/>
            <div className="container-fluid row">
                <div className="col-md-2 sidebar">
                    <Sidebar/>
                </div>
                <div className="col-md-10 row container"  style={{position: 'absolute', right:0}}>
                    {
                        services.map(service => <ManageService service={service} key={service._id}></ManageService>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageServices;