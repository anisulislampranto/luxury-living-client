import React, { useEffect, useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import ConfirmedOrder from '../ConfirmedOrder/ConfirmedOrder';
import Sidebar from '../Sidebar/Sidebar';

const ConfirmedOrderLists = () => {
    const [confirmedOrders, setConfirmedOrders] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:4040/confirmedOrders')
        .then(res => res.json())
        .then(data => setConfirmedOrders(data))
      },[])
    

    return (
        <div>
            <Navigation/>
            <div className='col-md-2 sidebar'>
                <Sidebar/>
            </div>
            <div className='col-md-10' style={{position:'absolute', right: 0}}>
            <table>
                    <thead>
                        <tr   style={{boxShadow: '1px 2px 2px gray', borderRadius: '10px'}}>
                            <td><strong>Name</strong></td>
                            <td><strong>Email</strong></td>
                            <td><strong>Service Name</strong></td>
                            <td><strong>Price</strong></td>
                            <td><strong>Order Date</strong></td>
                            <td><strong>Order Status</strong></td>
                        </tr>
                    </thead>
                    {
                        confirmedOrders.map(confirmedOrder => <ConfirmedOrder confirmedOrder={confirmedOrder} key={confirmedOrder._id}></ConfirmedOrder>)
                    }
                    
                </table>
                
            </div>
        </div>
    );
};

export default ConfirmedOrderLists;