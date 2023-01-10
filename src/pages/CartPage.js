import React, { useContext,useEffect,useState} from 'react'
import CartRow from '../components/CartRow';
import phoneContext from '../context/phoneContext'
import './../css/cartpage.css'
export default function CartPage() {
  const a = useContext(phoneContext) ;
  const [obj ,setobj]= useState() ;
  useEffect(() => {
    //console.log(b.itemInfo);
    async function fc() {
      let data = await fetch("http://localhost:3000/orders/cart",
        {
          method: "POST",
          body: JSON.stringify({
            "phone": a.phone.number
          }),
          headers: {
            "Content-Type": "application/json"
          }
        });
        let gh = await data.json() ;
        setobj(gh) ;
      
    } fc();
  }, []);

  return (
    <>
    <div className="shoping">
      <h1>Shoping Cart</h1>
      <div className='underline'><hr /></div>
        <table className="table table-bordered">
          <thead>
            <tr>
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
              return <CartRow key={obj[element].id} id={obj[element].id} quantity = {obj[element].quantity} phone = {obj[element].phone} />
            })}
          </tbody>
        </table>
    </div>
      
    </>

  )
}
