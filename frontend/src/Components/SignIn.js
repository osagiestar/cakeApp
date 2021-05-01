import React, {useState, useEffect } from 'react';

const SignIn = () => {
     const [user, setUser] = useState([]);
          useEffect(() => {
        fetch('http://localhost:3002/customer')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setUser(data)
            }
        )
    }, []);

    console.log(user)
    return <div>
        <p> Customer details: {user.name} {user.address}</p>
    </div>  
}

export default SignIn;