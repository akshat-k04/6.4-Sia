import React, { useState ,useEffect } from 'react'
import {
  useNavigate
} from "react-router-dom";
export default function CartRow(props) {
    const navigate= useNavigate();
    const [ob , setobj] = useState("") ;
    const [quant, setquant] = useState(props.quantity) ;
    useEffect(() => {
        // console.log(props.id);
        async function fc() {
            let data = await fetch("http://localhost:3000/owner/detail",
                {
                    method: "POST",
                    body: JSON.stringify({
                        "id": props.id
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

            let gh = await data.json();
            setobj(gh);
            
        } fc();
    }, []);

    async function deleteit(){
        await fetch("http://localhost:3000/orders/delete",
            {
                method: "POST",
                body: JSON.stringify({
                    "id": props.id,
                    "phone":props.phone
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            console.log('done');
        window.location.reload();
    }


    function runner(event){
        
       setquant(event.target.value) ;
        
    }
  return (
    <>
          

          <tr>
              <th scope="row"><img className='image'onClick={deleteit} src='./assets/dustbin.png'></img></th>
              <td>{(ob==null)?null:ob.name} </td>
              <td>{(ob == null) ? null : ob.id}</td>
              <td>{(ob == null) ? null : ob.price}</td>
              <td><input type="number"  onChange={runner} className='quantity' value={quant}></input></td>
              <td>{(ob == null) ? null : String(parseInt(ob.price) * parseInt(quant))}</td>
          </tr>
    </>
  )
}
