import React, { useState, useEffect } from 'react';

const SignIn = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3002/sign-in/admin/2')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setUser(data)
            }
            )
    }, []);

    console.log(user)
    return (
    <div>
        <p> <b>You are singed in as</b>: {user.name} ({user.type});  </p>
    </div>
    )
}

export default SignIn;