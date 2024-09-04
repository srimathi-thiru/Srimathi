import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
  
      navigate('/'); 
  };
 const handlesign=()=>
 {
  navigate('/signup');
 }
  return (
    <>
    
       <div className="sty">
      <form onSubmit={handleSubmit}>
      
        <div className='sty1'>
          
          <br></br>
          <center><h2>LOGIN</h2></center>
         <br></br>
          <center>
            <h5 className='hhh'>USERNAME:</h5>
            <br></br>
            <input 
              type="text"
              id="in1"
              className='form'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required style={{backgroundColor:'white' ,color:'black', width:'250px'}}
            />
            <br /><br />
            <h5 className='hhh'>PASSWORD:</h5>
            <br />
            <input  className='form'
              type="password"
              id="in2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required style={{backgroundColor:'white' ,color:'black', width:'250px',height:'30px'}}
            />
            <br /><br />
            <button className="btn btn-primary">Submit</button>
            <br></br>
            <br></br>
            <h5>Create an Account ?</h5>
            <button style={{color:'blue'}}onClick={handlesign}>register here!!</button>
          </center>
        </div>
      </form>
    </div>
    </>
  );
};

export default Login;