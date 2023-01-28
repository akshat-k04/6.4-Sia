import React, { useContext, useEffect, useState } from 'react'
import profileContext from '../context/userProfileContext';
import phoneContext from '../context/phoneContext'
import './../css/profile.css'
import OrdersCard from '../components/OrdersCard';
// import {
//   Link
// } from "react-router-dom";
export default function ProfilePage() {
  const b = useContext(profileContext);
  const a = useContext(phoneContext) ;
  const[address ,upadd] =useState(b.address) ;
  const[zip ,upzip] = useState(b.zip) ;
  const phone = b.phone ;
  function inputadd(e){
    upadd(e.target.value) ;
  }

  function inzip(e){
    upzip(e.target.value) ;
  }


  useEffect(()=>{
    if (localStorage.getItem('phone') != null) {
      a.func(localStorage.getItem('phone'), true);
      b.func(localStorage.getItem('phone'));
      // navigate('/');

    }
  },[])


  async function updat(){
    let res = await fetch("http://localhost:3000/auth/forgetPassword", {
      method: "POST",
      body: JSON.stringify({
        phone: phone,
        address :address ,
        zip:zip 
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    let getdata = await res.json();
    if (getdata.bol ==="password updated"){
      alert('profile updated') ;
    }
  }
  return (
    <div className="gh">
    <div className='allprofile'>
    
      <center>
        <div className="profileContainer ">
          <h2  id="hding">User Profile</h2>
          <div className="mb-3">

            {/* {upadd(b.address)} */}
            <label id="titl" >Name</label>
            <input type="name" className="form-control "  id="exampleFormControlInput1" placeholder="name" value={b.name} disabled/>

            <label id="titl" >Phone Number</label>
            <input type="phone" className="form-control " id="exampleFormControlInput1" placeholder="number" value={b.phone} disabled/>


            <label id="titl" >Address</label>
            <input type="address" className="form-control " onChange={inputadd} value={(zip== null||zip.length==0)?b.address:address} id="exampleFormControlInput1" placeholder="address" />

          {/* {console.log(b.previousOrders)} */}

            <label id="titl" >ZipCode</label>
            <input type="zip" className="form-control " onChange={inzip} value={(zip==null||zip.length==0)?b.zip:zip} id="exampleFormControlInput1" placeholder="452005" />

            {(phone === "") ? <button type='button' onClick={updat} className="buton" disabled>Update</button> : <button type='button' onClick={updat} className="buton">Update</button>}

          </div>
        </div>
      </center>
        <div className="container my-3 ">
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
            {(b.previousOrders==null)?null:Object.keys(b.previousOrders).map((element) => {
              return <OrdersCard key={b.previousOrders[element].orderId} order={b.previousOrders[element]} num={element}/>
            })}
            
            </tbody>
          </table>
        </div>





      </div>
    </div>
  )
}
