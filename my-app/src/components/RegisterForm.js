// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { registerUser } from '../actions/registrationActions';
// import { loginUser } from '../actions/loginActions';
// import { useNavigate } from 'react-router-dom';

// const RegisterForm = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [role_id, setRole_Id] = useState('');
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const registrationStatus = useSelector((state) => state.registration); 
//   const loginStatus = useSelector((state) => state.login);

//   const handleRegister = async () => {
//     await dispatch(registerUser(username, password, role_id));

//     if (!registrationStatus.error) {
//       navigate('/success');
//     }
//   };

//   const handleLogin = async () => {
//     await dispatch(loginUser(username, password, role_id));

//     if (!loginStatus.error) {
//       navigate('/success');
//     }
//   };

//   return (
//     <div>
//       <h1>Register Page</h1>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <br />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <br />
//       <input
//         type="text"
//         placeholder="Role_ID"
//         value={role_id}
//         onChange={(e) => setRole_Id(e.target.value)}
//       />
//       <br />
//       <button onClick={handleRegister}>Register</button>
//       <button onClick={handleLogin}>Login</button>
//       {registrationStatus.error && <p>Error: {registrationStatus.error}</p>}
//       {loginStatus.error && <p>Login Error: {loginStatus.error}</p>}
//     </div>
//   );
// };

// export default RegisterForm;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../actions/registrationActions';
import { loginUser } from '../actions/loginActions';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role_id, setRole_Id] = useState('');
  const [registerProcessing, setRegisterProcessing] = useState(false);
  const [loginProcessing, setLoginProcessing] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registrationStatus = useSelector((state) => state.registration);
  const loginStatus = useSelector((state) => state.login);

  const isUsernameValid = (username) => {
    // Validate username format here (e.g., requires both first name and last name)
    const nameRegex = /^[A-Za-z]+\s[A-Za-z]+$/; // Assumes first name and last name are separated by a space
    return nameRegex.test(username);
  };

  const isPasswordValid = (password) => {
    // Validate password format here (e.g., at least 8 characters, one uppercase, one lowercase, one digit, one special character)
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
    return passwordRegex.test(password);
  };

  // Add your role_id validation logic if needed

  const handleRegister = async () => {
    setRegisterProcessing(true);

    if (isUsernameValid(username) && isPasswordValid(password)) {
      try {
        await dispatch(registerUser(username, password, role_id));

        if (!registrationStatus.error) {
          navigate('/success');
        }
      } catch (error) {
        // Handle errors here
      }
    } else {
      alert('Please enter a valid username and password format.');
    }

    setRegisterProcessing(false);
  };

  const handleLogin = async () => {
    setLoginProcessing(true);

    if (isUsernameValid(username) && isPasswordValid(password)) {
      try {
        await dispatch(loginUser(username, password, role_id));

        if (!loginStatus.error) {
          navigate('/success');
        }
      } catch (error) {
        // Handle errors here
      }
    } else {
      alert('Please enter a valid username and password format.');
    }

    setLoginProcessing(false);
  };

  return (
    <div>
      <h1>Register Page</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Role_ID"
        value={role_id}
        onChange={(e) => setRole_Id(e.target.value)}
      />
      <br />
      <button onClick={handleRegister} disabled={registerProcessing}>
        {registerProcessing ? 'Registering...' : 'Register'}
      </button>
      <button onClick={handleLogin} disabled={loginProcessing}>
        {loginProcessing ? 'Logging In...' : 'Login'}
      </button>
      {registrationStatus.error && <p>Error: {registrationStatus.error}</p>}
      {loginStatus.error && <p>Login Error: {loginStatus.error}</p>}
    </div>
  );
};

export default RegisterForm;
