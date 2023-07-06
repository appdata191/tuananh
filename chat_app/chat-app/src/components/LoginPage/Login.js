import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function LoginPage () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const info_customer = [{
    username_customer:'appdata',
    password_customer:'tuananh0304'
  },{

  }]


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };


  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // info_customer.map((username_customer,password_customer) => {
    //   if (username_customer === username && password_customer === password) {
    //     navigate('/Chat')
    //   }
    // })
    // Perform your desired logic, 
    //such as validating the credentials or making an API call to store the data
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;