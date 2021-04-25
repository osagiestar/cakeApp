import React from 'react';

 const Customer = () => {
         const [user, setUser] = useState([]);
          useEffect(() => {
        fetch("localhost:3000/customer/}")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setUser(data)
            }
        )
    });
    console.log(user)
    return (
        <p> Customer details: user={user} </p>
    )
}

export default Customer;
