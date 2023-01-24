import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function OrdersCard(props) {
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
              <td><Link onClick={st}>{props.order.orderId}</Link></td>
            <td>{props.order.date}</td>
            <td>{props.order.status}</td>
        </tr>
          {(showDetails)?<tr>
            <td colSpan={4}>
          <div className="alert alert-primary alert-dismissible fade show" role="alert">
            <table className="table">
              <thead>
                <tr>
                  
                  <th scope="col">Product Id</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">price</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(props.order.productDetails).map((element) => {
                  return <tr key={props.order.productDetails[element].id}>
                    {/* {console.log(props.order.productDetails[element])} */}

                    <td scope="row">{props.order.productDetails[element].id}</td>
                    <td>{props.order.productDetails[element].quantity}</td>
                    <td>{props.order.productDetails[element].price}</td>
                    <td>{parseInt(props.order.productDetails[element].quantity) * parseInt(props.order.productDetails[element].price)}</td>
                  </tr>
                })}
                <tr>
                <td scope="row" colSpan={3}>Shipping Charge</td>
                <td>{(props.order.delivery =="delivery")?"100" : "0"}</td>
                </tr>
                <tr>
                  <td scope='row' colSpan={3}>GRAND TOTAL</td>
                <td>{(props.order.delivery == "delivery") ? `${parseInt(props.order.grandTotal) + 100}` : props.order.grandTotal}</td>
                </tr>
                <tr>
                  <td scope='row' colSpan={3}>delivery type</td>
                  <td>{props.order.delivery}</td>
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
