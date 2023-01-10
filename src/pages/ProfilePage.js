import React, { useContext, useState } from 'react'
import profileContext from '../context/userProfileContext';
import './../css/profile.css'
// import {
//   Link
// } from "react-router-dom";
export default function ProfilePage() {
  const b = useContext(profileContext);
  const[address ,upadd] =useState(b.address) ;
  const[zip ,upzip] = useState(b.zip) ;
  const phone = b.phone ;
  function inputadd(e){
    upadd(e.target.value) ;
  }

  function inzip(e){
    upzip(e.target.value) ;
  }

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

    <>
    
<center>
        <div className="profileContainer">
          <h2  id="hding">User Profile</h2>
          <div className="mb-3">

{console.log(b.name)}
            <label id="titl" >Name</label>
            <input type="name" className="form-control "  id="exampleFormControlInput1" placeholder="name" value={b.name} disabled/>

            <label id="titl" >Phone Number</label>
            <input type="phone" className="form-control " id="exampleFormControlInput1" placeholder="number" value={b.phone} disabled/>


            <label id="titl" >Address</label>
            <input type="address" className="form-control " onChange={inputadd} value={address} id="exampleFormControlInput1" placeholder="address" />



            <label id="titl" >ZipCode</label>
            <input type="zip" className="form-control " onChange={inzip} value={zip} id="exampleFormControlInput1" placeholder="452005" />

            {(phone === "") ? <button type='button' onClick={updat} className="buton" disabled>Update</button> : <button type='button' onClick={updat} className="buton">Update</button>}

          </div>
        </div>
      </center>
        <div className="container-sm my-3 ">
          <div className='orderhaed'><h1>Order History</h1></div>
          <table className="table bg-primary">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Items</th>
                <th scope="col">Order Date</th>
                <th scope="col">status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>





      

    </>
  )
}
