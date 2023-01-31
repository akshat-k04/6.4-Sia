import React from 'react'
import { useNavigate } from 'react-router-dom';
import './../css/success.css'

export default function AwaitPage() {
    const navigate = useNavigate() ;
    
  return (
      <center className='fullpg'>
          <div class="card cardsuccess" >
              <img src="./assets/siaQRcode.png" class="card-img-top ig" alt="..." />
                  <div class="card-body">
                  <h5 class="card-title">scan the qr code to pay</h5>
                  <p class="card-text">please fill the google form within an hour after doing the payment.It is mandatory</p>
                  <a href="https://forms.gle/d1cQjUqZM5PyYQfR6" class="btn btn-primary">Form Link</a>
                  </div>
          </div>
          <h5 className='padd'>If it is take away then you collect your order from 257,HI-link extension,Chota Bangarda, indore(452005)</h5>
          <div>
              <h6>timing:-10AM to 7PM</h6>
          </div>
          {/* <center className='tpt'>
              <h3 className="font-monospace fw-bold">scan the qr code to pay</h3>
              <div>
                  <img height={"250"} width={"250"} src="./assets/siaQRcode.jpg"></img>
              </div>
              <center><h6>NOTE:- </h6></center>

              <button type="button"  className="btn btn-primary">Form Link</button>
              <center><p>NOTE:- we varify payments mannually that's why it will take atleast 4-5 hrs to varify your payment.</p>
              <p>Once your payment is varified it will appear on your profile page</p>
                  <h5>If it is take away then you collect your order from 257,HI-link extension,Chota Bangarda, indore(452005)</h5>
                  <div>
                      <h6>timing:-10AM to 7PM</h6>
                  </div>
              </center> 
          </center>*/}
      </center>
  )
}
