import React from 'react';

const OrderList = (props) => {
    const {_id ,name, email, serviceName, servicePrice, date} = props.order;
    console.log(_id);

    const handleConfirmOrder = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name)
        formData.append('email', email)
        formData.append('servicePrice', servicePrice)
        formData.append('serviceName', serviceName)
        formData.append('date', date)
        formData.append('id', _id)


        fetch('https://still-brook-35546.herokuapp.com/addConfirmedOrder', {
            method: 'POST', 
            body: formData
        }).then( res => res.json())
        .then(data => {
            if (data) {
                alert('Successfully Added to confirmed Order List')

                fetch('https://still-brook-35546.herokuapp.com/deleteConfirmedOrder/'+ _id,{
                    method:'DELETE',
                })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        alert('OrderInfo Moved to Confirmed Order List')
                    }
                })
            }
        })
    }

    const handleCompleteOrder = (e) => {
        e.preventDefault();

        const formData2 = new FormData();
        formData2.append('name', name)
        formData2.append('email', email)
        formData2.append('servicePrice', servicePrice)
        formData2.append('serviceName', serviceName)
        formData2.append('date', date)
        formData2.append('id', _id)


        fetch('https://still-brook-35546.herokuapp.com/addCompletedOrder', {
            method: 'POST', 
            body: formData2
        }).then( res => res.json())
        .then(data => {
            if (data) {
                alert('Successfully Added to Completed Order List')

                fetch('https://still-brook-35546.herokuapp.com/deleteCompletedOrder/' + _id,{
                    method:'DELETE',
                })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        alert('OrderInfo Moved to Completed Order List')
                    }
                })
            }
        })

    }


    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{serviceName}</td>
                <td>${servicePrice}</td>
                <td>{date}</td>
                <td>
                    <div class="btn-group">
                        <button type="button" class="border-0 dropdown-toggle bg-transparent text-dark" data-bs-toggle="dropdown" aria-expanded="false">
                            Action
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#" onClick={handleConfirmOrder}>Confirm Order</a></li>
                            <li><a class="dropdown-item" href="#" onClick={handleCompleteOrder}>Complete Order</a></li>
                        </ul>
                    </div>
                </td>
            </tr>
        </tbody>
    );
};

export default OrderList;