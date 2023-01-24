import React,{useEffect,useState,useContext} from 'react'
import Card from '../components/Card'
import phoneContext from '../context/phoneContext'
import profileContext from '../context/userProfileContext';
// import {
//      useNavigate
// } from "react-router-dom";
import Carousel from '../components/Carousel'
import './../css/homescreen.css'
export default function HomeScreen() {
    const [article, settate]= useState({});
    const a = useContext(phoneContext);
    const b = useContext(profileContext);
    // const navigate = useNavigate() ;
    useEffect(()=>{async function fc () {
            if (localStorage.getItem('phone') != null) {
                a.func(localStorage.getItem('phone'), true);
                b.func(localStorage.getItem('phone'));
                // navigate('/');

            }
        
        let data = await fetch("http://localhost:3000/owner/find", { method: "GET" });
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
                      <Card name={article[element].name} id={article[element].id} description={article[element].description} imageurl={article[element].imageurl} type={article[element].type} price={article[element].price} quantity={article[element].quantity} />
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
