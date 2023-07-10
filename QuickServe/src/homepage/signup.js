
import React from 'react';
import logo from './photo/logo.png';
import { useNavigate } from 'react-router-dom';
import './signup.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"></link>
export default function SignUp() {

    const navigate = useNavigate();
  
    function handleSubmit(event){
    event.preventDefault();
    navigate('/signup');

    }
    function togglePasswordVisibility() {
        var passwordInput = document.getElementById("password");
        var showButton = document.getElementById("showButton");
  
        if (passwordInput.type === "password") {
          passwordInput.type = "text";
          showButton.textContent = "";
        } else {
          passwordInput.type = "password";
          showButton.textContent = "";
        }
      }




  return (
    
    <div className='homepagelogin' >

    <div className='logo' >
    <img  src={logo} alt="Logo" />
    </div>
    
  
    <div className='signup'>
       <div className='title'><h1>SIGN UP</h1></div>
            <div style={{ width: '445px', height: '260px', overflowY: 'scroll'} }> 

                <form onSubmit={handleSubmit}>

                <div className='makeCenter'>   
                <div className='inside'>
                    <label>First Name:</label>
                    <input class="inputHomepage" required type="text" placeholder="Enter your first name" />
                    <br></br>
                </div>
                <div className='inside'>
                    <label>Last Name:</label>
                    <input class="inputHomepage" required type="text" placeholder="Enter your last name" />
                    <br></br>
                </div>
                <div className='inside'>
                    <label>Email:</label><br></br>
                    <input class="inputHomepage" required type="email" placeholder="Enter your email" />
                    <br></br>
                </div>
                <div className='inside'>
                    <label>Password:</label>
                    <input class="inputHomepage" required type="password" id="password" name="password" placeholder="Enter your password"/>
                    <button className='showhide'id="showButton" onClick={togglePasswordVisibility}></button>
                    <br></br>
                    
                </div>
                
                <button className='submitbox' type="submit">Sign Up</button>
                </div> 
                </form>
            </div>
        </div>
    </div>
  )
}

