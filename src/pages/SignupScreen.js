import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './../css/loginpage.css'



export default function SignupScreen() {
  const navigate = useNavigate();
  const [phone, updatephone] = useState("");
  const [nme, updatename] = useState("");
  const [password, updatepassword] = useState("");
  const [conpassword, updateconpassword] = useState("");
  const [sendr, upd] = useState(false);
  const [otpsend, setVarifier] = useState(false);
  const [otp, setotp] = useState("");
  const [email, setemail] = useState("");
  const base = "https://siaback.onrender.com";

  function runname(e) {
    updatename(e.target.value);
    if (sendr === true) {
      upd(false);
    }

    //console.log(nme);
  }
  function runphone(e) {
    updatephone(e.target.value);
    console.log(phone);
    if (sendr === true) {
      upd(false);
    }

    //console.log(phone);

  }
  function runpassword(e) {
    updatepassword(e.target.value);
    if (sendr === true) {
      upd(false);
    }

    //console.log(password);

  }
  function runemail(e) {
    setemail(e.target.value);
  }
  function runconpassword(e) {
    updateconpassword(e.target.value);
    if (sendr === true) {
      upd(false);
    }

    //console.log(password);

  }
  async function sender() {
    if (password === conpassword && password.length !== 0 && nme.length !== 0 && phone.length === 10) {
      //send the details to the database
      // TODO:- if otp varified then do this process
      let rt = await fetch(`${base}/otp/varify`, {
        method: "POST",
        body: JSON.stringify({
          "phone": phone,
          "email": email,
          "otp": otp
        }),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "https://siaback.onrender.com"
        }
      });

      const rp = await rt.json()
      if (rp.bol == "varified") {
        let dataset = {
          phone: phone,
          name: nme,
          password: password,
          email: email
        }
        console.log(password);
        console.log(JSON.stringify(dataset));

        let res = await fetch(`${base}/auth/signup`, {
          method: "POST",
          body: JSON.stringify(dataset),
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "https://siaback.onrender.com"
          }
        });

        const rs = await res.json();
        if (rs.bol == true) {
          window.alert('horraae!');
          navigate('/auth/login');
        }
        else {
          window.alert('user already exist');
        }
      }
      else {
          alert("invalid otp");
      }
    }
    else{
      upd(true) ;
    }

  }


  async function getotp() {
    

    if (password === conpassword && password.length !== 0 && nme.length !== 0 && phone.length === 10) {
      let ry = await fetch(`${base}/auth/userchecker`, {
        method: "POST",
        body: JSON.stringify({"email":email}),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "https://siaback.onrender.com"
        }
      });
      const rf = await ry.json();
    // TODO:- send message for otp
    if(rf.bol===false){
      setVarifier(true);

    let dataset = {
      "phone": phone,
      "email": email
    }
      let res = await fetch(`${base}/otp/send`, {
      method: "POST",
      body: JSON.stringify(dataset),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://siaback.onrender.com"
      }
    });
    const rs = await res.json();
    if (rs.bol === "done") {
      alert("otp sended");
    }
  }
  else{
      window.alert('user already exist');
  }
    }
    else {
      upd(true);
    }
  }



  function runotp(e) {
    setotp(e.target.value);
  }
  return (
    <>
      <center className='lgin'>
        <div className="card" >
          <img src='/assets/siaLogo.jpg' className="card-img-top img" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Create Account</h5>
            {(!otpsend) ? <input type="name" className="form-control pd" id="exampleFormControlInput1" onChange={runname} placeholder="name" /> : <input type="name" className="form-control pd" id="exampleFormControlInput1" disabled value={nme} placeholder="name" />}
            {(!otpsend) ? <input type="email address" className="form-control pd" id="exampleFormControlInput1" onChange={runemail} placeholder="email address" /> : <input type="email" className="form-control pd" id="exampleFormControlInput1" disabled value={email} placeholder="email address" />}
            {(!otpsend) ? <input type="phone" className="form-control pd" id="exampleFormControlInput1" onChange={runphone} placeholder="10 digit phone number" /> : <input type="phone" className="form-control pd" id="exampleFormControlInput1" disabled value={phone} placeholder="10 digit phone number" />}
            {(!otpsend) ? <input type="password" className="form-control pd" id="inputPassword2" onChange={runpassword} placeholder="Password"></input> : <input type="password" className="form-control pd" id="inputPassword2" value={password} disabled placeholder="Password"></input>}
            {(!otpsend) ? <input type="password" className="form-control pd" id="inputPassword" onChange={runconpassword} placeholder="re-enter Password"></input> : <input type="password" className="form-control pd" id="inputPassword" disabled placeholder="re-enter Password"></input>}
            {(otpsend) ? <input type="otp" className="form-control pd" onChange={runotp} placeholder="OTP"></input> : null}
            <button type='button' onClick={(otpsend) ? sender : getotp} className="btn btn-primary" >{(otpsend) ? "submit" : "E-Mail OTP"}</button>


          </div>
        </div>

        <hr className='dividerline' />
        <label >Already have an account?</label>
        <Link className='signup' to="../auth/login">sign in</Link>


        {(sendr === true && (password !== conpassword || password === "")) ? <div className="alert alert-danger" role="alert">
          password not match with confirm passwrd
        </div> : null}
        {(sendr === true && nme.length === 0) ? <div className="alert alert-danger" role="alert">
          please enter a valid name
        </div> : null}
        {(sendr === true && phone.length !== 10) ? <div className="alert alert-danger" role="alert">
          please enter a valid phone number
        </div> : null}
      </center>
    </>
  )
}
