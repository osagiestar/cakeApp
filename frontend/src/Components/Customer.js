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
        <h2 id="title"> List of Customers </h2>
        <Table className="customer">
            <thead>
                <tr>
                    <th> Name </th>
                    <th> Email </th>
                    <th> Address </th>
                    <th> City </th>
                    <th> Postcode </th>
                    <th> Country </th>
                </tr>
            </thead>
            <tbody>
                {customer.map((item, index) => (
                    <tr key={index}>
                        <td> {item.name} </td>
                        <td> {item.email} </td>
                        <td> {item.address} </td>
                        <td> {item.city} </td>
                        <td> {item.postcode} </td>
                        <td> {item.country} </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </div>
}

export default Customer;
