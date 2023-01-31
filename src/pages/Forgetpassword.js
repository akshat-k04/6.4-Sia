import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './../css/loginpage.css'

export default function Forgetpassword() {
    const navigate = useNavigate() ;
    const[enableotp ,changer] =useState(false) ;
    const[email ,setemail] = useState("");
    const[otp,otper] = useState() ;
    const [password,psser]=useState("") ;
    
    const[showpass,maker] = useState(false) ;
    const[disABLE,ler] = useState(false) ;
    const base = "https://siaback.onrender.com";

    function runphone(e){
        setemail(e.target.value) ;
    }
    function runotp (e){
        otper(e.target.value) ;
    }
    function runpass(e) {
        psser(e.target.value);
    }


    async function otpsender() {
        let dataset = ({
            "email": email
        })
        console.log(dataset);

        let res = await fetch(`${base}/auth/userchecker`, {
            method: "POST",
            body: JSON.stringify(dataset),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "https://siaback.onrender.com"
            }
        });
        let getdata = await res.json();
        if(getdata.bol ==true){
            //means user exist 
            changer(true);
            ler(true) ;
            //TODO:- write code to send otp
            let os = await fetch(`${base}/otp/send`, {
                method: "POST",
                body: JSON.stringify(dataset),
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "https://siaback.onrender.com"
                }
            });
            const rs = await os.json();
            if (rs.bol === "done") {
                alert("otp sended");
            }
        }
        else {
            alert('user not exist') ;
        }
    }
    async function checkotp(){
        //TODO:- write code to check otp then update the otpvarifier
        let rt = await fetch(`${base}/otp/varify`, {
            method: "POST",
            body: JSON.stringify({
                
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
            maker(true);
        }
        
        else {
            alert('otp not match') ;
        }
    }
    async function updatePass(){
        if(password.length!==0){
            let dataset = ({
                "email": email,
                password:password
            })


            let res = await fetch(`${base}/auth/forgetPassword`, {
                method: "POST",
                body: JSON.stringify(dataset),
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "https://siaback.onrender.com"
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

      <center className='lgin'>
          <div className="card" >
              <img src='/assets/siaLogo.jpg' className="card-img-top img" alt="..." />
              <div className="card-body">
                  <h5 className="card-title">Recover Your Password</h5>
                  {(disABLE) ? <input type="email" className="form-control pd" id="exampleFormControlInput1" disabled /> : <input type="email" className="form-control pd" onChange={runphone} id="exampleFormControlInput1" placeholder="email address" />}
                  {(enableotp) ? (showpass) ? <input type="password" className="form-control pd" value={password} onChange={runpass} id="exampleFormControlInput1" placeholder="password" /> : <input type="OTP" className="form-control pd" onChange={runotp} id="exampleFormControlInput1" placeholder="OTP" /> : null} 

                  {/* <input type="otp" className="form-control pd"  id="zi" placeholder="otp" /> */}
                  {/* <button  className="btn btn-primary">Get OTP</button> */}
                  <button type='button' onClick={(enableotp) ? (showpass) ? updatePass : checkotp : otpsender} className="btn btn-primary">{(enableotp) ? (showpass) ? "Update it!" : 'submit' : 'get OTP'}</button>

                  
              </div>
          </div>
          <hr className='dividerline' />

          <div className="signupbuton">
              <label >E-mail support:<Link type='button' className="signup">kakshat35@gmail.com</Link></label>
          </div>
         
      </center>

  )
}
