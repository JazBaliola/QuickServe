import React, { useEffect } from 'react';
import logo from './photo/logo.png';
import './Login.css';
import { useNavigate } from 'react-router-dom';

<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;400;600;900&display=swap" rel="stylesheet">
</link>

export default function Home() {
       
  const navigate = useNavigate();
  // const [dataUsers, setDataUsers] = useState(null);
  
  useEffect(() => {
    window.tiledeskSettings = {
      projectid: '64a388b12fb10000130a3fe6',
    };

    (function(d, s, id) {
      var w = window;
      var i = function() {
        i.c(arguments);
      };
      i.q = [];
      i.c = function(args) {
        i.q.push(args);
      };
      w.Tiledesk = i;
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.async = true;
      js.src = 'https://widget.tiledesk.com/v6/launch.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'tiledesk-jssdk');
  }, []);
  
  function handleLogin(event){
    event.preventDefault();
    let data = document.getElementById('emailLogin').value;
    if(data.includes("admin") || data.includes("jaz")){
      navigate('/adminPanel');
    } else {
      navigate('/bookTicket');
    }
  }


  function handleSignup(event){
    event.preventDefault();
    navigate('/signup');

  }

  function togglePasswordVisibility(event) {
    event.preventDefault ();
    let passwordInput = document.getElementById("passwordLogin");

    let showButton1 = document.getElementById("showButton1");

    let showButton2 = document.getElementById("showButton2");




    if (passwordInput.type === "password") {

      passwordInput.type = "text";

      showButton1.style.display = "none";

      showButton2.style.display = "block";

    } else {

      passwordInput.type = "password";

      showButton1.style.display = "block";

      showButton2.style.display = "none";

    }

  }
  

  return (


    <div className='homepagelogin'>

    <div className='logo'>
    <img src={logo} alt="Logo" />
    </div>
    
  
    <div className='login'>
    <form >

       

<div className='head'><h1>LOGIN</h1> </div>

<br></br>

<label >Username/Email</label>

<br></br>




<input class="inputHomepage" required type="text" id="emailLogin" placeholder="Enter your username or email" />
<br></br>

<label>Password</label>

<input class="inputHomepage" required type="password" id="passwordLogin" name="password" placeholder="Enter your password" /><br/>
<i className='showhide' id="showButton1" class="bi bi-eye" onClick={togglePasswordVisibility}></i>
<i className='showhide' id="showButton2" class="bi bi-eye-slash" onClick={togglePasswordVisibility}></i>



<br></br>

<br></br>

<br></br>



<input  className='boxes' type="submit" value="Log In" onClick={handleLogin}/>

<input className='boxes' type="submit" value="Sign Up" onClick={handleSignup}/>

</form>
            
            
        
    </div>
    </div>
  )
}
