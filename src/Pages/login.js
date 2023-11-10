import React, { useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import AuthService from '../Services/AuthService';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { updateToken } = useContext(AuthContext);
    const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleLogin = async () => {
    const { success, token, message } = await AuthService.login(username, password);


    if (success) {

      updateToken(token); 
      console.log('Login exitoso, token:', token);
      navigate('/usersall');
    } else {
      setErrorMessage(message);
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault(); 
    handleLogin(); 
  };


  return (
    <div className="container">
      <form className="p-5" onSubmit={handleSubmit}> {}
        <div className="form-outline mb-4">
          <input
            id="form2Example1"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="form-label" htmlFor="form2Example1">Usuario</label>
        </div>
        <div className="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="form-label" htmlFor="form2Example2">Password</label>
        </div>
        <button type="submit" className="btn btn-primary btn-block mb-4">Ingresar</button>
      </form>
    </div>
  );
};


export default Login;