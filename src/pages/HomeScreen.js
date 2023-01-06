import React,{useEffect,useState} from 'react'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import './../css/homescreen.css'
export default function HomeScreen() {
    const [article, settate]= useState({});
    
    useEffect(()=>{async function fc () {
        let data = await fetch("http://localhost:3000/owner/find", { method: "POST", data: "" });
        let parsedata = await data.json();
        settate(parsedata);
    } fc();},[]);
    
  return (
    <>
    
    <Carousel/>

          
              <div className='row'>
              {Object.keys(article).map((element) => {
                  return <div className='col-md-4 my-3' key={article[element].id}>
                      {/* {console.log(article[element])} */}
                      <Card name={article[element].name} id={article[element].id} disc={article[element].discription} image={article[element].image} type={article[element].type} price={article[element].price} quantity={article[element].quantity} />
                  </div>
              })}
              
              


        
    </div>
          <center>
              <div className="homebox">
                  <p>hiii</p>
              </div>
          </center>
    </>
  )
}
