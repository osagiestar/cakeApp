import React from 'react';

const Login = () => {


    return (
        <div className="body">
          <div className="login-form">
            <div>
              <h3>
                <span className="font-weight-bold">Welcome to BakesbyDebbie </span>
              </h3>
            </div>
            <div>
              <h3 className="first-line">Please Enter Your Details</h3>
            </div>
            <div>
              <div className="email">
                <input
                  type="email"
                  placeholder="username or email"
                  value={email}
                  name="email"
                  onChange={(event) => setEmail(event.target.value)}
                  required
                ></input>
              </div>
              <div className="email">
                <input
                  type="Password"
                  placeholder="Enter your password"
                  value={password}
                  name="password"
                  onChange={(event) => setPassword(event.target.value)}
                  required
                ></input>
              </div>
              <button className="button">
                Login 
              </button>
            </div>
          </div>
        </div>
      );
    };
    
    export default Login;