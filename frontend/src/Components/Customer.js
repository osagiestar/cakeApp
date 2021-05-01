import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

function Customer() {
    const [customer, setCustomer] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3002/customers/all')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setCustomer(data)
            }
        )
    }, []);

    console.log(customer)
    return <div>
        <Table className="customer-list">
            <thead>
                <tr> Name </tr>
                <tr> Email </tr>
                <tr> Address </tr>
                <tr> City </tr>
                <tr> Postcode </tr>
                <tr> Country </tr>
            </thead>
            <body>
                {customer.map((item) => (
                    <tr>
                    <td> {item.name} </td>
                    <td> {item.email} </td>
                    <td> {item.address} </td>
                    <td> {item.city} </td>
                    <td> {item.postcode} </td>
                    <td> {item.country} </td>
                    </tr>
                ))}
            </body>
            {/* <p> Customer details: {customer.name} {customer.address}</p> */}
        </Table>
    </div>
}

export default Customer;
