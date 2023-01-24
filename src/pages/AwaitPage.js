import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function AwaitPage() {
    const navigate = useNavigate() ;
    
  return (
      <>
          <center>
              <h3 className="font-monospace fw-bold">scan the qr code to pay</h3>
              <div>
                  <img height={"250"} width={"250"} src="./assets/siaLogo.jpg"></img>
              </div>
              <center><h6>NOTE:- please fill the google form within 2 hrs after doing the payment.</h6></center>

              <button type="button"  className="btn btn-primary">Form Link</button>
              <center><p>NOTE:- we varify payments mannually that's why it will take atleast 4-5 hrs to varify your payment.</p>
              <p>Once your payment is varified it will appear on your profile page</p>
                  <h5>If it is take away then you collect your order from 257,HI-link extension,Chota Bangarda, indore(452005)</h5>
                  <div>
                      <h6>timing:-10AM to 7PM</h6>
                  </div>
              </center>
          </center>
      </>
  )
}
