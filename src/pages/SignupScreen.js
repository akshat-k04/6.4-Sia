import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './../css/SignupScreen.css'




export default function SignupScreen() {
  const navigate = useNavigate() ;
  const [phone, updatephone] = useState("");
  const [nme, updatename] = useState("");
  const [password, updatepassword] = useState("");
  const [conpassword, updateconpassword] = useState("");
  const [sendr , upd] = useState(false) ;
  
  function runname(e) {
    updatename(e.target.value);
    if(sendr===true){
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
  function runconpassword(e) {
    updateconpassword(e.target.value);
    if (sendr === true) {
      upd(false);
    }
    
    //console.log(password);

  }
  async function sender(){
    if (password === conpassword &&password.length!==0 && nme.length !== 0 && phone.length === 10) {
      //send the details to the database

      let dataset ={
        phone:phone ,
        name:nme,
        password:password
      }
      console.log(password);
      console.log(JSON.stringify(dataset ));

      let res = await fetch("/auth/signup",{
        method:"POST" ,
        body: JSON.stringify(dataset),
        headers: {
          "Content-Type":"application/json"
        }
      });

      const rs = await res.json() ;
      if(rs.bol==true){
        window.alert('horraae!');
        navigate('/auth/login') ;
      }
      else{
        window.alert('user already exist') ;
      }
    }
    else{
      upd(true);
    }
    
    
  }


  return (
    <>
    <center>
      <img src='/assets/siaLogo.jpg' alt='sia logo' className="imgsize"/>
      <div className="signupcred">
          <h2 className='crtacc' >Create account</h2>
          <div className="mb-3">
            

            <label  id="tte" >Name</label>
            <input type="name" className="form-control " id="exampleFormControlInput1" onChange={runname} placeholder="name@example.com" />


            <label  id="tte" >Phone number</label>
            <input type="phone" className="form-control " id="exampleFormControlInput1" onChange={runphone} placeholder="9999999999" />


            <label id='tte' >password</label>
            <input type="password" className="form-control" id="inputPassword2" onChange={runpassword} placeholder="Password"></input>

            <label id='tte' >re-enter password</label>
            <input type="password" className="form-control" id="inputPassword" onChange={runconpassword} placeholder="re-enter Password"></input>



              <button type='button' onClick={ sender } className="signupbtn" href="">submit</button>
            
          </div>
      </div>
      <hr className='dividerline' />
        <label >Already have an account?</label>
        <Link className='lnk'  to="../auth/login">sign in</Link>


        {(sendr ===true && (password !== conpassword ||password==="")  ) ? <div className="alert alert-danger" role="alert">
          password not match with confirm passwrd
        </div> : null}
        {(  sendr === true&&nme.length === 0 ) ? <div className="alert alert-danger" role="alert">
          please enter a valid name
        </div> : null}
        {(  sendr === true&&phone.length !== 10 ) ? <div className="alert alert-danger" role="alert">
          please enter a valid phone number
        </div> : null}
    </center>
    </>
  )
}
