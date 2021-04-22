import React, { useState, useEffect } from 'react';
import './customers.css';

function Customers() {
    
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch('api/customers')
            .then(res => res.json())
            .then(customerData => setCustomers(customerData));
    }, []);
    
    return (
        <div>
        <h2>Customers</h2>
        <ul>
            {customers.map(customer => 
                <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
            )}
        </ul>
        </div>
    );
    
    
}

export default Customers;
