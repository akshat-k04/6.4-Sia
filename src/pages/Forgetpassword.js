import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
export default function Forgetpassword() {
    const navigate = useNavigate() ;
    const[enableotp ,changer] =useState(false) ;
    const[phone ,phoner] = useState("");
    const[otp,otper] = useState() ;
    const [password,psser]=useState("") ;
    
    const[showpass,maker] = useState(false) ;
    const[disABLE,ler] = useState(false) ;
    function runphone(e){
        phoner(e.target.value) ;
    }
    function runotp (e){
        otper(e.target.value) ;
    }
    function runpass(e) {
        psser(e.target.value);
    }


    async function otpsender() {
        let dataset = ({
            phone: phone
        })


        let res = await fetch("http://localhost:3000/auth/userchecker", {
            method: "POST",
            body: JSON.stringify(dataset),
            headers: {
                "Content-Type": "application/json"
            }
        });
        let getdata = await res.json();
        if(getdata.bol ==true){
            //means user exist 
            changer(true);
            ler(true) ;
            //TODO:- write code to send otp
        }
        else {
            alert('user not exist') ;
        }
    }
    function checkotp(){
        //TODO:- write code to check otp then update the otpvarifier
        if(otp.length==5){
            maker(true);
        }
        
        else {
            alert('otp not match') ;
        }
    }
    async function updatePass(){
        if(password.length!==0){
            let dataset = ({
                phone: phone,
                password:password
            })


            let res = await fetch("/auth/forgetPassword", {
                method: "POST",
                body: JSON.stringify(dataset),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            let getdata = await res.json();
            if (getdata.bol =="password updated"){
                alert('password updated');
                navigate('/');
            }
        }


        else{
            alert('enter password') ;
        }
    }
  return (

      <center>
          <div className="loginphoto">
              <img src='/assets/siaLogo.jpg' alt='sia logo' className='imgsize'></img>
          </div>
          <div className="logincred">
              <h2 className='txt' id="tt">Recover your password</h2>
              <div className="mb-3">


                  <label id="tte" >Phone number</label>
                  {(disABLE) ? <input type="phone" className="form-control " id="exampleFormControlInput1" disabled />:<input type="phone" className="form-control " onChange={runphone} id="exampleFormControlInput1" placeholder="9876543210" />}


                  <label id="tte" >{(enableotp) ? (showpass) ?"password":"OTP":null}</label>
                  {(enableotp) ? (showpass) ? <input type="password" className="form-control " onChange={runpass} id="exampleFormControlInput1" placeholder="password" />: <input type="phone" className="form-control " onChange={runotp} id="exampleFormControlInput1" placeholder="567890"  />:null} 
                  {/* <input type="phone" className="form-control " onChange={runotp} id="exampleFormControlInput1" placeholder="9876543210" ></input> */}
                  <button type='button' onClick={(enableotp)?(showpass)?updatePass:checkotp:otpsender} className="buton">{(enableotp) ?(showpass)?"update": 'submit' : 'get OTP'}</button>
              </div>
          </div>
          <hr className='dividerline' />

          <div className="signupbuton">
              <label >E-mail support:<Link type='button' className="signup">kakshat35@gmail.com</Link></label>
          </div>
      </center>

  )
}
