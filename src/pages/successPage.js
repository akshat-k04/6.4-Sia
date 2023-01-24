import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function SuccessPage() {
    const navigate = useNavigate();
    function navi(){
        navigate("/") ;
    }
  return (
    <>
    <center>
              <h3 className="font-monospace fw-bold">Woo-Hoo! Order Successfully placed</h3>
              <h5>please collect your order from 257,HI-link extension,Chota Bangarda, indore(452005)</h5>
              <div>
                  <h6>timing:-10AM to 7PM</h6>
              </div>
              <button type="button" onClick={navi} className="btn btn-primary my-3">GO BACK</button>
    </center>
    </>
  )
}
