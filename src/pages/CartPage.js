import React, { useContext} from 'react'
import phoneContext from '../context/phoneContext'
export default function CartPage() {
  const a = useContext(phoneContext) ;
  
  

  return (
    <>
    <center>
<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ex nostrum, deserunt hic minus eum tempora non, dignissimos aliquid ullam facere, alias totam corporis provident deleniti officia fugiat vitae officiis!</div>
        <div>{a.phone.number}</div>
        <div>{(a.phone.showDetails)?'true':'fals'}</div>
    </center>
      
    </>

  )
}
