import React, { useEffect, useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import CompletedOrder from '../CompletedOrder/CompletedOrder';
import Sidebar from '../Sidebar/Sidebar';

const CompletedOrderLists = () => {
    const [completedOrders, setCompletedOrders] = useState([])

    useEffect(()=>{
        fetch('http://localhost:4040/completedOrders')
        .then(res => res.json())
        .then(data => setCompletedOrders(data))
    },[])


    return (
        <div>
            <Navigation/>
            <div className="col-md-2 sidebar">
                  <Sidebar/>  
            </div>
            <div className="col-md-10" style={{position:'absolute', right: 0}}>  
            <table>
                <thead>
                    <tr style={{boxShadow: '1px 2px 2px gray', borderRadius: '10px'}}>
                        <td><strong>Name</strong></td>
                        <td><strong>Email</strong></td>
                        <td><strong>Service Name</strong></td>
                        <td><strong>Price</strong></td>
                        <td><strong>Order Date</strong></td>
                        <td><strong>Order Status</strong></td>
                    </tr>
                </thead>    
                {
                    completedOrders.map(completedOrder => <CompletedOrder completedOrder={completedOrder} key={completedOrder._id}></CompletedOrder>)

                }
            </table>
           </div>
        </div>
    );
};

export default CompletedOrderLists;