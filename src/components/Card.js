import React, {useState, useEffect,useContext} from 'react'
import itemContext from '../context/itemContext';
import { useNavigate
} from "react-router-dom";
 import phoneContext from '../context/phoneContext';
import "./../css/card.css"


export default function Card(props) {
  const b = useContext(itemContext);
  const c = useContext(phoneContext);
  let desci = props.description ;
  const [img, setImg] = useState();
  const nevigate = useNavigate() ;
  const base = "https://siaback.onrender.com";
  useEffect(() => {async function fc() {
    //console.log(props.imageurl);
    


    let data = await fetch(`${base}/owner/findimg`, 
    { method: "POST", 
      body: JSON.stringify({
        "url": props.imageurl
      }) ,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://siaback.onrender.com"
      }
  });
    const imageBlob = await data.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
    // console.log(data);
  } fc();
  }, []);


    async function addToCart() {
      if(c.email.email.length!==0){
        let dataset = {
          'email': c.email.email,
          'quantity': 1,
          'id':props.id,
          'price':props.price
        }
        let res = await fetch(`${base}/orders/addToCart`, {
          method: "POST",
          body: JSON.stringify(dataset),
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "https://siaback.onrender.com"
          }
        });
        let obj = await res.json();
        if (obj.bol == 'true') {
          alert('done');
        }
        else {
          alert('already added');
        }
      }
      else {
        nevigate('/auth/login');
      }

    }
  
  function navigateit(){
    // if(c.phone.number.length===10){
      b.funct(props.id, props.name, props.quantity, props.price, props.description, props.type, props.imageurl);
      nevigate('/productInfo');
    // }
    // else{

    //   nevigate('/auth/login');
    // }
  }
  return (
    <>
          <div className="card homecard">
        <img src={img} className="card-img-top" onClick={navigateit}  alt={props.id}/>
                  <div className="card-body">
                      <h4 className="card-title">{props.name}</h4>
                      <p  className="card-text">{(desci.length>119)?desci.slice(0,119)+"...":desci}</p>
                      <p className='price'>{props.price}/-</p>
                      <button onClick={addToCart} className="addbtn ">Add To Cart</button>
                  </div>
          </div>
    </>
  )
}
