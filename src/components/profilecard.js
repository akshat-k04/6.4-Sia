import React, { useState } from 'react'
import './../css/profilecard.css'

export default function Profilecard(props) {
    const base = "https://siaback.onrender.com";

    const [update ,setup] = useState(false) ;
    const [address, upadd] = useState(props.address);
    const [zip, upzip] = useState(props.zip);
    function inputadd(e) {
        upadd(e.target.value);
    }

    function inzip(e) {
        upzip(e.target.value);
    }
    async function enabler(){
        setup(!update) ;
        // console.log(update);
        if (update) {
            
            let res = await fetch(`${base}/auth/forgetPassword`, {
                    method: "POST",
                    body: JSON.stringify({
                        email: props.email,
                        address: address,
                        zip: zip
                    }),
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "https://siaback.onrender.com"
                    }
                });
                let getdata = await res.json();
            console.log(address);
                if (getdata.bol === "password updated") {
                    alert('profile updated');
                    window.location.reload();
            }
        }
    }
  return (
    <>
          <div className="card profile w-30 " >
              <img src="./assets/profilepg.png" className="card-img-top" alt="..." />
              {/* <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div> */}
              <h5 className="card-title">{props.name}</h5>

              <h6 className="card-subtitle mb-2 text-muted">{props.email}</h6>
              <h6 className="card-subtitle mb-2 text-muted">{props.number}</h6>

              {(!update)?<p className="card-text">{props.address},{props.zip}</p>:
              <div className="inpt">
              <input type="address" className="form-control pdt" onChange={inputadd} value={address} id="ad" placeholder="address" />
              <input type="address" className="form-control pdt" id="zi" onChange={inzip} value={zip} placeholder="zip" />
                  </div>}
              {(props.number === "") ? <button type='button' className="bon text-white" disabled>Update</button> : <button type='button' onClick={enabler} className="bon text-white">{(update)?"Update":"Edit Address"}</button>}
          </div>
    </>
  )
}
