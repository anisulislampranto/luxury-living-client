import React, { useEffect, useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import OrderList from '../OrderList/OrderList';
import Sidebar from '../Sidebar/Sidebar';

const OrderLists = () => {
    const [orders, setOrders] = useState();

    useEffect(()=>{
        fetch('http://localhost:4040/bookings')
        .then(res => res.json())
        .then(data => setOrders(data))

    },[])

    console.log(orders);

    return (
        <div>
            <Navigation/>
            <div className="col-md-2 sidebar">
                <Sidebar/>
            </div>
            <div className="col-md-10 container-fluid" style={{position:'absolute', right: 0}}>

            <table className="container">
                    <thead style={{boxShadow: '1px 2px 2px gray', padding:'10px', paddingLeft:'10px', borderRadius:'5px'}}>
                        <tr>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Service</td>
                            <td>Service Price</td>
                            <td>Order Date</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    {
                         orders?.map(order => <OrderList order={order} /> )
                    }
                </table>

                

            </div>
        </div>
    );
};

export default OrderLists;