import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CartPageCart from '../components/CartPageCart';
import phoneContext from '../context/phoneContext'
import profileContext from '../context/userProfileContext';
import './../css/cartpage.css'
export default function CartPage() {
  const a = useContext(phoneContext);
  const b = useContext(profileContext);
  const [obj, setobj] = useState();
  const navigate = useNavigate();


  useEffect(() => {
    if (localStorage.getItem('phone') != null) {
      a.func(localStorage.getItem('phone'), true);
      b.func(localStorage.getItem('phone'));
      // navigate('/');


    }

    async function fc() {
      let data = await fetch("http://localhost:3000/orders/cart",
        {
          method: "POST",
          body: JSON.stringify({
            "phone": (localStorage.getItem('phone') == null) ? a.phone.number : localStorage.getItem('phone')
          }),
          headers: {
            "Content-Type": "application/json"
          }
        });
      let gh = await data.json();
      setobj(gh);

    } fc();
  }, []);

  function sender() {
    if (!(obj == null || obj.length == 0)) {
      navigate('/orderSummery');
    }
    else {
      alert("cart is empty");
    }
  }
  return (
    <>
      {/* {fc() } */}
      <div className="mainBox">
        <h1 >Shopping Cart</h1>
        
          <div className='underline'><hr /></div>
        {/* <div className='row cardrow'> */}
        {(obj == null || obj.length==0) ? <h4>cart is empty</h4> : Object.keys(obj).map((element) => {
          // return <div className='col-6 mx  my-0.1' key={obj[element].id}>
          return <CartPageCart id={obj[element].id} key={obj[element].id} quantity={obj[element].quantity} phone={obj[element].phone} />
          // </div>
        })}
        {/* </div> */}
        <button type="button" onClick={sender} className="btn btn-primary">Next</button>
        
        
        



      </div>
    </>
  )
}




{/* <table className="table bg-white table-bordered">
            <thead>
              <tr className='bg-head'>
                <th scope="col">Drop</th>
                <th scope="col">Product</th>
                <th className="hidden-mobile" scope="col">Product Id</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th className="tot"scope='col'>Total</th>
              </tr>
            </thead>
            <tbody>

              {(obj == null) ? null : Object.keys(obj).map((element) => {
                return <CartRow key={obj[element].id} id={obj[element].id} quantity={obj[element].quantity} phone={obj[element].phone} />
              })}
            </tbody>
          </table>

          {(obj == null || obj.length == 0) ? <center><h5>cart is empty</h5></center> : null} */}