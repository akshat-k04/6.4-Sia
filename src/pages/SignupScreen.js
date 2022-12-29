import React from 'react'
import { Link } from 'react-router-dom'
import './../css/SignupScreen.css'

export default function SignupScreen() {
  return (
    <>
    <center>
      <img src='/assets/siaLogo.jpg' alt='sia logo' className="imgsize"/>
      <div className="signupcred">
          <h2 className='crtacc' >Create account</h2>
          <div class="mb-3">
            

            <label for="exampleFormControlInput1" id="tte" >Name</label>
            <input type="name" className="form-control " id="exampleFormControlInput1" placeholder="name@example.com" />


            <label for="exampleFormControlInput1" id="tte" >Phone number</label>
            <input type="phone" className="form-control " id="exampleFormControlInput1" placeholder="9999999999" />


            <label id='tte' >password</label>
            <input type="password" class="form-control" id="inputPassword2" placeholder="Password"></input>


            <label id='tte' >re-enter password</label>
            <input type="password" class="form-control" id="inputPassword2" placeholder="Password"></input>



            <Link to="/auth/login">
              <button type='button' className="signupbtn" href="">submit</button>
            </Link>
            
          </div>
      </div>
      <hr className='dividerline' />
        <label >Already have an account?</label>
        <Link className='lnk'  to="../auth/login">sign in</Link>
    </center>
    </>
  )
}
