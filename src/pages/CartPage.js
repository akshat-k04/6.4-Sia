import React, { useContext,useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import CartRow from '../components/CartRow';
import phoneContext from '../context/phoneContext'
import profileContext from '../context/userProfileContext';
import './../css/cartpage.css'
export default function CartPage() {
  const a = useContext(phoneContext) ;
  const b = useContext(profileContext);
  const [obj ,setobj]= useState() ;
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
        let gh = await data.json() ;
        setobj(gh) ;
      
    } fc();
  }, []);

  function sender(){
    navigate('/orderSummery') ;
  }
  return (
    <>
      {/* {fc() } */}
    <div className="shoping">
      <h1>Shoping Cart</h1>
      <div className='underline'><hr /></div>
        <table className="table  table-bordered">
          <thead>
            <tr className='table-primary'>
              <th scope="col">Remove</th>
              <th scope="col">Product</th>
              <th scope="col">Product Id</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope='col'>Total</th>
            </tr>
          </thead>
          <tbody>
            {console.log((obj == null) ? null : Object.keys(obj))}
            {(obj==null)?null:Object.keys(obj).map((element) => {
              return <CartRow key={obj[element].id} id={obj[element].id} quantity = {obj[element].quantity} phone= {obj[element].phone} />
            })}
          </tbody>
        </table>
        <button type="button" onClick={sender} className="btn btn-primary">Next</button>
    </div>
      
    </>

  )
}
