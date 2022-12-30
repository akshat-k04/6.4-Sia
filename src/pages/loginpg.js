import React, { useState } from 'react'
import './../css/loginpage.css'
import {
  Link
} from "react-router-dom";



export default function Loginpg() {

  const [phone , updatephone] = useState("") ;
  const[password ,updatepassword] =useState("") ;
  const[booler , updat] = useState(false) ;
  function runphone(e){
    updatephone(e.target.value) ;
  }
  function runpassword(e){
    updatepassword(e.target.value) ;
  }

  function checkinfo(){
    //write this in if conditiion
    updat(true) ;
  }

  return (
    <center>
      <div className="loginphoto">
        <img src='/assets/siaLogo.jpg' alt='sia logo' className='imgsize'></img>
      </div>
      <div className="logincred">
        <h2 className='txt' id="tt">Sign in</h2>
        <div className="mb-3">


          <label  id="tte" >Phone number</label>
          <input type="phone" className="form-control " onChange={runphone} id="exampleFormControlInput1" placeholder="9876543210" />


          <label id='tte' >password</label>
          <input type="password" className="form-control" onClick={runpassword} id="inputPassword2" placeholder="Password"></input>

          <Link to={(booler)?"/":null}>
            <button type='button' onClick=
            {checkinfo} className="buton">submit</button>
          </Link>
          <Link type='button' className="forgetpass" to="/">Forget Password</Link>
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
