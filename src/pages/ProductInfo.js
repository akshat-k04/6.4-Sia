import React,{useContext,useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import itemContext from '../context/itemContext';
import phoneContext from '../context/phoneContext';
import './../css/productinfo.css'
export default function ProductInfo() {
    const b = useContext(itemContext);
    const a = useContext(phoneContext);
    const navigate = useNavigate() ;
    const [img, setImg] = useState();
    useEffect(() => {
        //console.log(b.itemInfo);
        async function fc() {
            let data = await fetch("http://localhost:3000/owner/findimg",
                {
                    method: "POST",
                    body: JSON.stringify({
                        "url": b.itemInfo.imageurl
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
            const imageBlob = await data.blob();
            const imageObjectURL = URL.createObjectURL(imageBlob);
            setImg(imageObjectURL);
            // console.log(data);
        } fc();
    }, []);


    async function addtoCart(){
        if(a.phone.number.length===10){
            let dataset = {
                'phone': a.phone.number,
                'quantity': 1,
                'id': b.itemInfo.id,
                'price':b.itemInfo.price
            }
            let res = await fetch("http://localhost:3000/orders/addToCart", {
                method: "POST",
                body: JSON.stringify(dataset),
                headers: {
                    "Content-Type": "application/json"
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
            navigate('/auth/login') ;
        }

    }



  return (
    <>
    <div className="combo">
        <div className="lftside">
            <img src={img} className="photo" alt='sc'></img>
            
        </div>
        <div className="rgtside">
          <div className="name"><h1>{b.itemInfo.name}</h1></div>
          <div className="type"><h5>{b.itemInfo.type}</h5></div>
          {b.itemInfo.id}
          <br/>
          <div className="price"><h2>₹{b.itemInfo.price}</h2></div>
          <br />
          <br />
          <h2>Product Details</h2>
          <div className="description">{b.itemInfo.description}</div>
          <button onClick={addtoCart} className='butn'>add to cart</button>
        </div>
        </div>
    
    </>
  )
}
