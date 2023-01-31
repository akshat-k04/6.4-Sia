import React, { useContext, useState, useEffect } from 'react'
import phoneContext from '../context/phoneContext'
import './../css/loginpage.css'
import {
  Link, useNavigate
} from "react-router-dom";
import profileContext from '../context/userProfileContext';


export default function Loginpg() {
  const a = useContext(phoneContext);
  const b = useContext(profileContext);
  const navigate = useNavigate();
  const [email, updateemail] = useState();
  const [password, updatepassword] = useState();
  const base = "https://siaback.onrender.com";





  function rnphone(e) {
    updateemail(e.target.value);

    //console.log(phone);

  }
  function rnpassword(e) {
    updatepassword(e.target.value);
    //console.log(password);

  }


  async function checkino() {

    //console.log(phone+password);


    let res = await fetch(`${base}/auth/login`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password
      }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://siaback.onrender.com"
      }
    });
    let getdata = await res.json();
    // console.log(getdata.bol);
    // console.log(password);
    if (getdata.bol == "success") {
      a.func(email, true);
      b.func(email);
      localStorage.setItem('email',email);
      //console.log(goahead+goahead);
      window.alert('login successfully');
      navigate('/')
    }
    else if (getdata.bol == "fail") {
      window.alert('wrong password');
    }
    else {
      alert('user not exist');
    }
  }

  return (
    <center className='lgin'>
      <div className="card" >
        <img src='/assets/siaLogo.jpg' className="card-img-top img" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Login Credentials</h5>
          <input type="email" className="form-control pd" onChange={rnphone}  placeholder="email address" />
          <input type="password" className="form-control pd" onInput={rnpassword}  placeholder="password" />
          {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
          <button onClick={checkino} className="btn btn-primary">Login</button>
          <Link type='button' className="forgetpass" to="/auth/forgetpassword">Forget Password</Link>
        </div>
      </div>
      
      <hr className='dividerline' />

      <div className="signupbuton">
        <label >Don't have an account?</label>
        <Link type='button' className="signup" to="../auth/signup">create your account</Link>
      </div>
    </center>


  )
}
