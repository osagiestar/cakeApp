import React, {useState, useEffect} from 'react';


 function Customer () {
         const [user, setUser] = useState([]);
          useEffect(() => {
        fetch('http://localhost:3001/customer')
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

export default Customer;
