import React, { useContext, useEffect, useState } from 'react'
import profileContext from '../context/userProfileContext';
import phoneContext from '../context/phoneContext'
import './../css/profile.css'
import OrdersCard from '../components/OrdersCard';
import Profilecard from '../components/profilecard';
// import {
//   Link
// } from "react-router-dom";
export default function ProfilePage() {
  const b = useContext(profileContext);
  const a = useContext(phoneContext);
  const base = "https://siaback.onrender.com";

  const email = b.email;
  


  useEffect(() => {
    if (localStorage.getItem('email') != null) {
      a.func(localStorage.getItem('email'), true);
      b.func(localStorage.getItem('email'));
      // navigate('/');

    }
  }, [])


  
  return (
    <>
    <div className="fullpg">
      <div className="combined text-center">
          <Profilecard name={b.name} number={b.phone} email={b.email} address={b.address} zip={b.zip}></Profilecard>





          
            <div className="right">
              {(b.previousOrders == null || b.previousOrders.length == 0) ? <h2>ohh! you don't have any previous order</h2> :
                <div className="container">
                  <div className='orderhaed'><h1>Order History</h1></div>
                  <table className="table table-bordered">
                    <thead>
                      <tr className='table-primary'>
                        <th scope="col">#</th>
                        <th scope="col">OrderId</th>
                        <th scope="col">Order Date</th>
                        <th scope="col">status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(b.previousOrders == null || b.previousOrders.length == 0) ? null : Object.keys(b.previousOrders).map((element) => {
                        return <OrdersCard key={b.previousOrders[element].orderId} order={b.previousOrders[element]} num={element} />
                      })}

                    </tbody>
                  </table>
                </div>
              }
            </div>
          </div>
      </div>
    </>
    













//       <div className='allprofile'>
//       <div className="container combine text-center">
        
//           <div className="lf">
//             <div className="left">
              
//             </div>
//           </div>
          
          
        //  </div>
      // </div>
  )
}
