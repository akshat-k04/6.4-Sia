import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Carousel from '../components/Carousel';
import CartPageCart from '../components/CartPageCart';
import phoneContext from '../context/phoneContext'
import profileContext from '../context/userProfileContext';
import './../css/cartpage.css'
export default function CartPage() {
  const a = useContext(phoneContext);
  const b = useContext(profileContext);
  const [obj, setobj] = useState();
  const navigate = useNavigate();
  const base = "https://siaback.onrender.com";


  useEffect(() => {
    if (localStorage.getItem('email') != null) {
      a.func(localStorage.getItem('email'), true);
      b.func(localStorage.getItem('email'));
      // navigate('/');


    }

    async function fc() {
      let data = await fetch(`${base}/orders/cart`,
        {
          method: "POST",
          body: JSON.stringify({
            "email": (localStorage.getItem('email') == null) ? a.email.email : localStorage.getItem('email')
          }),
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "https://siaback.onrender.com"
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
        <div className="combined">
        {/* <div className='row cardrow'> */}
        <div className="leftPart">
          <h1 >Shopping Cart</h1>

          <div className='underline'><hr /></div>
        {(obj == null || obj.length==0) ? <h4>cart is empty</h4> : Object.keys(obj).map((element) => {
          // return <div className='col-6 mx  my-0.1' key={obj[element].id}>
          return <CartPageCart id={obj[element].id} key={obj[element].id} quantity={obj[element].quantity} email={obj[element].email} />
          // </div>
        })}
        {/* </div> */}
        <button type="button" onClick={sender} className="btn btn-primary">Next</button>
        </div>
        <div className="rightPart">

            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="5000">
                  <img src="./assets/1-3.jpg" height={500} class="cart d-block w-100" alt="..." />
                </div>
      
                <div class="carousel-item" data-bs-interval="5000">
                  <img src="./assets/3-4.jpg" height={500} class=" cart d-block w-100" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="5000">
                  <img src="./assets/5.png" height={500} class=" cart d-block w-100" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="5000">
                  <img src="./assets/6.png" height={500} class=" cart d-block w-100" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="5000">
                  <img src="./assets/7.png" height={500} class=" cart d-block w-100" alt="..." />
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>




          

        </div>
        
        
        </div>


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