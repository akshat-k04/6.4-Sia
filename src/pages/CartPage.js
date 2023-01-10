import React, { useContext} from 'react'
import phoneContext from '../context/phoneContext'
import './../css/cartpage.css'
export default function CartPage() {
  const a = useContext(phoneContext) ;
  
  

  return (
    <>
    <div className="shoping">
      <h1>Shoping Cart</h1>
      <div className='underline'><hr /></div>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Remove</th>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope='col'>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"><img className='image'  src='./assets/dustbin.png'></img></th>
              <td>Mark</td>
              <td>Otto</td>
              <td><input type="number" placeholder='1' className='quantity'></input></td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row"><img className='image' src='./assets/dustbin.png'></img></th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td><input type="number" placeholder='1' className='quantity'></input></td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row"><img className='image' src='./assets/dustbin.png'></img></th>
              <td>@mdo</td><td>@mdo</td>
              <td><input type="number" placeholder='1' className='quantity'></input></td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
    </div>
      
    </>

  )
}
