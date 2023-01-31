import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import itemContext from '../context/itemContext';
import phoneContext from '../context/phoneContext';
import './../css/productinfo.css'
export default function ProductInfo() {
    const b = useContext(itemContext);
    const a = useContext(phoneContext);
    const navigate = useNavigate();
    const [img, setImg] = useState();
    const base = "https://siaback.onrender.com";

    useEffect(() => {
        //console.log(b.itemInfo);
        async function fc() {
            let data = await fetch(`${base}/owner/findimg`,
                {
                    method: "POST",
                    body: JSON.stringify({
                        "url": b.itemInfo.imageurl
                    }),
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


    async function addtoCart() {
        if (a.email.email.length !== 0) {
            let dataset = {
                'email': a.email.email,
                'quantity': 1,
                'id': b.itemInfo.id,
                'price': b.itemInfo.price
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
            navigate('/auth/login');
        }

    }



    return (
        <>
            <div className="combo">
                <div className="containe">
                    <div className="lftside">
                        <img src={img} className="photo" alt='sc'></img>

                    </div>
                    <div className="rgtside">
                        <div className="name"><h1>{b.itemInfo.name}{(<h5>{b.itemInfo.id}</h5>)}</h1></div>
                        <div className="type"></div>
                        <div className="price"><h2>₹{b.itemInfo.price}</h2></div>
                        <br />
                        <h3>Product Details</h3>
                        <div className="description">{b.itemInfo.description}</div>
                        <button onClick={addtoCart} className='butn'>add to cart</button>
                    </div>
                </div>
            </div>

        </>
    )
}
