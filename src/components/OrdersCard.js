import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './../css/OrderCard.css'

export default function OrdersCard(props) {
  const base = "https://siaback.onrender.com";

    const [showDetails , srt] = useState(false) ;
    function st(){
        if(showDetails){
            srt(false) ;
        }
        else{
            srt(true) ;
        }
    }
  return (
    <>
        <tr>
            <th scope="row">{parseInt(props.num)+1}</th>
            {console.log(props.order)}
        <td ><Link className='signup' onClick={st}>{props.order.orderId}</Link></td>
            <td>{props.order.date}</td>
            <td>{props.order.status}</td>
        </tr>
          {(showDetails)?<tr>
            <td colSpan={4}>
          <div className="alert bg-white  show" role="alert">
            <table className="table">
              <thead>
                <tr>
                  
                  <th scope="col">Product Id</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">price</th>
                  <th className='sizin' scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(props.order.productDetails).map((element) => {
                  return <tr key={props.order.productDetails[element].id}>
                    {/* {console.log(props.order.productDetails[element])} */}

                    <td scope="row">{props.order.productDetails[element].id}</td>
                    <td>{props.order.productDetails[element].quantity}</td>
                    <td>{props.order.productDetails[element].price}</td>
                    <td className='sizin'>{parseInt(props.order.productDetails[element].quantity) * parseInt(props.order.productDetails[element].price)}</td>
                  </tr>
                })}
                <tr>
                <td scope="row" colSpan={2}>Shipping Charge</td>
                  <td className='sizin'></td>

                <td>{(props.order.delivery =="delivery")?"100" : "0"}</td>
                </tr>
                <tr>
                  <td scope='row' colSpan={2}>GRAND TOTAL</td>
                  <td className='sizin'></td>

                <td>{(props.order.delivery == "delivery") ? `${parseInt(props.order.grandTotal) + 100}` : props.order.grandTotal}</td>
                </tr>
                <tr>
                  <td scope='row' colSpan={2}>delivery type</td>
                  <td className='sizin'></td>
                  <td>{props.order.delivery}</td>
                </tr>
                <tr>
                  <td scope='row' colSpan={2}>payment mode</td>
                  <td className='sizin'></td>

                  <td>{props.order.payment}</td>
                </tr>
              </tbody>
            </table>
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
          </div>
            </td>
          </tr>:null}
    </>
  )
}
