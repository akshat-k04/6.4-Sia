import React from 'react'
import './../css/loginpage.css'
import {
  Link
} from "react-router-dom";



export default function Loginpg() {
  return (
    <center>
      <div className="loginphoto">
        <img src='/assets/siaLogo.jpg' alt='sia logo' className='imgsize'></img>
      </div>
      <div className="logincred">
        <h2 className='txt' id="tt">Sign in</h2>
        <div class="mb-3">


          <label for="exampleFormControlInput1" id="tte" >Phone number</label>
          <input type="phone" className="form-control " id="exampleFormControlInput1" placeholder="name@example.com" />


          <label id='tte' >password</label>
          <input type="password" class="form-control" id="inputPassword2" placeholder="Password"></input>


          <button type='button' className="buton">submit</button>
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
