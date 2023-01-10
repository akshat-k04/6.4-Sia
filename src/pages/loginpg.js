import React, { useContext,  useState } from 'react'
import phoneContext from '../context/phoneContext'
import './../css/loginpage.css'
import {
  Link, useNavigate
} from "react-router-dom";
import profileContext from '../context/userProfileContext';


export default function Loginpg() {
  const a = useContext(phoneContext) ;
  const b = useContext(profileContext) ;
  const navigate = useNavigate() ;
  const [phone , updatephone] = useState() ;
  const[password ,updatepassword] =useState() ;

  // useEffect(() => {
  //   a.func( phone,goahea);
  //  console.log(goahea);
  //   {(goahea===true)?navigate('/'):console.log('hii')} ;
  // },[goahea])



  function rnphone(e){
    updatephone(e.target.value) ;
    
    //console.log(phone);

  }
  function rnpassword(e){
    updatepassword(e.target.value) ;
    //console.log(password);

  }

  
  async function checkino(){
    
    //console.log(phone+password);
    

    let res = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      body: JSON.stringify({
        phone: phone,
        password: password
}),
      headers: {
        "Content-Type": "application/json"
      }
    });
    let getdata = await res.json() ;
    // console.log(getdata.bol);
    // console.log(password);
    if(getdata.bol == "success"){
      a.func(phone,true) ;
      b.func(phone) ;
      //console.log(goahead+goahead);
     window.alert('login successfully') ;
      navigate('/')

    }
    else if(getdata.bol=="fail"){
      window.alert('wrong password') ;
    }
    else{
      alert('user not exist') ;
    }
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
          <input type="phone" className="form-control "  onChange={rnphone} id="exampleFormControlInput1" placeholder="9876543210" />


          <label id='tte' >password</label>
          <input type="password" className="form-control" onInput={rnpassword}  placeholder="Password"></input>

            <button type='button' onClick={checkino} className="buton">submit</button>

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
