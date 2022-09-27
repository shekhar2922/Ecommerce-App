import axios from "axios";
import { useState, useEffect } from "react";
import "./login.css"
import {useNavigate} from "react-router-dom"

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(()=> {
    let adminInfo = localStorage.getItem("adminInfo")
    if(adminInfo){
      navigate('/admin/index')
    }
  },[navigate])

  const handleClick = async () => {
    try {
      let {data} =  await axios.post("http://localhost:3000/admin/login", {
        username,
        password,
      });
      localStorage.setItem("adminInfo", JSON.stringify(data))
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className='login-container'>
      <div className='login-wrapper'>
        <h1>Admin Dashboard</h1>
        <input
          placeholder="Username"
          className='login-input'
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          className='login-input'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleClick} className='login-button'>
          Sign In
        </button>
        {error && <span className='login-error'>Wrong Credentials!</span>}
      </div>
    </div>
  );
};

export default Login;
