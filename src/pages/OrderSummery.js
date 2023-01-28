import React,{useEffect, useContext,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import phoneContext from '../context/phoneContext'
import profileContext from '../context/userProfileContext';
import './../css/OrderSummery.css'



export default function OrderSummery() {
    const navigate = useNavigate() ;
    const a = useContext(phoneContext);
    const b = useContext(profileContext);
    const [data , setobj] = useState();
    const [subval, seval] = useState() ;
    const [orderType, setType] = useState("takeAway") ;
    const [payMode, moder] = useState("UPI") ;
    function change(e){
        moder(e.target.value) ;
        // console.log(payMode);
        // console.log(e.target.value);
    }
    function changer(){
        if (orderType=="delivery"){
            setType("takeAway");
        }
        else {
            setType("delivery");
            moder("UPI");
        }
    }
    
    async function navigtor(){
        let details = [] ;
        let indi ;
        let fgb = Date().toString().slice(4, 15);
        if(subval==null|| subval==0){
            alert("cart is empty") ;
        }
        else {
        Object.keys(data).map((e) => {
            indi = {
                "id": data[e].id,
                "price": data[e].price ,
                "quantity": data[e].quantity 
            }
            
            details.push(indi) ;
        })
        
        let info ={
            "orderId": `${ localStorage.getItem('phone')}${ Date().toString().slice(1,24) }`,
            "phone": `${localStorage.getItem('phone') }` ,
            "productDetails": details ,
            "delivery":orderType ,
            "payment":payMode ,
            "status": (payMode == "COD") ?"your order will be ready shortly":"payment apporoval pending",
            "date":`${fgb}`,
            "grandTotal": subval
        }
        
        let daa = await fetch("http://localhost:3000/confirm/addOrder",
            {
                method: "POST",
                body: JSON.stringify(info),
                headers: {
                    "Content-Type": "application/json"
                }
            });
        let dat = await daa.json();
        console.log(dat.bol);

        
        Object.keys(data).map(async(e) => {

            await fetch("http://localhost:3000/orders/delete",
                {
                    method: "POST",
                    body: JSON.stringify(data[e]),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
        });


        if(payMode=="COD"){
            navigate("/successPage");
        }
        else{
            navigate("/await") ;
        }
    }
    }
    useEffect(()=>{
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
                        "phone": localStorage.getItem('phone') 
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
            let gh = await data.json();
            setobj(gh);
            let val =0 ;
            Object.keys(gh).map((e)=>{
                val += parseInt(gh[e].price)*parseInt(gh[e].quantity) ;
                
            })

            seval(val) ;
            
        } fc();
    },[])
  return (
    <>
          <div className="shoping">
              <h1>Order Summery</h1>
              <div className='underline'><hr /></div>

              <table className="table  table-bordered">
                  <thead>
                      <tr className='table-primary'>
                          
                          <th scope="col">Product Id</th>
                          <th scope="col">Price</th>
                          <th scope="col">Quantity</th>
                          <th className='tot' scope='col'>Total</th>
                      </tr>
                  </thead>
                  <tbody>
                      
                      {(data == null) ? null : Object.keys(data).map((e) =>{
                          { console.log(data[e].id) }
                          return <tr key={data[e].id}>
                              
                              <td>{data[e].id}</td>
                              <td>{data[e].price}</td>
                              <td>{data[e].quantity}</td>
                              <td className='tot'>{parseInt(data[e].quantity) * parseInt(data[e].price)}</td>
                          </tr>
                      })}
                  </tbody>
              </table>



          <table className="table">
              <thead>
                  <tr className='table-primary'>
                      <th scope="col">Cart Total</th>
                      <th scope="col"></th>
                      
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      
                      <td>Sub-Total</td>
                      <td>{(subval==null)?null:subval}</td>
                  </tr>
                  <tr>
                      
                      <td>shipping Charge<input className="form-check-input" onClick={changer} type="checkbox"   id="flexCheckDefault"/></td>
                      <td>{(orderType=="delivery")?100:0}</td>
                      {console.log(orderType)}
                  </tr>
                  <tr>

                      <td>Grand Total</td>
                      <td>{(subval == null) ? null : (orderType == "delivery") ? subval+100 :subval}</td>
                  </tr>
                  
              </tbody>
          </table>
          <h5>{(orderType=="delivery")?"you selected home delivery":"you selected take away"}</h5>
              <h1>Payment Option</h1>
              <div className='underline'><hr /></div>
              <select defaultValue="UPI"  id="hil" className="form-select" onChange={change} size={(orderType !== "delivery") ?2 :1} >
                  <option value={"UPI"}  >UPI</option>
                  {(orderType !== "delivery" ) ?  <option value={"COD"}  >COD</option>:null }
                  
              </select>
              <button type="bn" onClick={ navigtor} className="btn btn-success my-3">PlaceOrder</button>
              <center><h5>NOTE:- Once you ordered you can't cancel it.</h5></center>
          </div>

          
    </>
  )
}
