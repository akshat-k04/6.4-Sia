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
  
  const phone = b.phone;
  


  useEffect(() => {
    if (localStorage.getItem('phone') != null) {
      a.func(localStorage.getItem('phone'), true);
      b.func(localStorage.getItem('phone'));
      // navigate('/');

    }
  }, [])


  
  return (
      <div className='allprofile'>
      <div className="container text-center">
        <div className="row">
          <div className="col-5 lf">
            <div className="left">
              <Profilecard name={b.name} number={b.phone} address={b.address} zip={b.zip}></Profilecard>
              {/* <div className="profileContainer ">
                <h2 id="hding">User Profile</h2>
                <div className="mb-3">

                  
                  <label id="titl" >Name</label>
                  <input type="name" className="form-control " id="exampleFormControlInput1" placeholder="name" value={b.name} disabled />

                  <label id="titl" >Phone Number</label>
                  <input type="phone" className="form-control " id="exampleFormControlInput1" placeholder="number" value={b.phone} disabled />


                  <label id="titl" >Address</label>
                  <input type="address" className="form-control " onChange={inputadd} value={(zip == null || zip.length == 0) ? b.address : address} id="exampleFormControlInput1" placeholder="address" />

                  

                  <label id="titl" >ZipCode</label>
                  <input type="zip" className="form-control " onChange={inzip} value={(zip == null || zip.length == 0) ? b.zip : zip} id="exampleFormControlInput1" placeholder="452005" />

                  {(phone === "") ? <button type='button' onClick={updat} className="buton" disabled>Update</button> : <button type='button' onClick={updat} className="buton">Update</button>}

                </div>
              </div> */}
            </div>
          </div>
          
          <div className="col-7 rg">
            <div className="right">
              {(b.previousOrders == null || b.previousOrders.length == 0)?<h2>ohh! you don't have any previous order</h2>:
              <div className="container">
                <div className='orderhaed'><h1>Order History</h1></div>
                <table className="table  table-bordered">
                  <thead>
                    <tr className='table-primary'>
                      <th scope="col">#</th>
                      <th scope="col">OrderId</th>
                      <th scope="col">Order Date</th>
                      <th scope="col">status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(b.previousOrders == null || b.previousOrders.length==0) ? null : Object.keys(b.previousOrders).map((element) => {
                      return <OrdersCard key={b.previousOrders[element].orderId} order={b.previousOrders[element]} num={element} />
                    })}

                  </tbody>
                </table>
              </div>
}
            </div>
          </div>
        </div>
      </div>
        
      




      </div>
  )
}
