import React,{useEffect,useState,useContext} from 'react'
import Card from '../components/Card'
import phoneContext from '../context/phoneContext'
import profileContext from '../context/userProfileContext';
// import {
//      useNavigate
// } from "react-router-dom";
import Carousel from '../components/Carousel'
import './../css/homescreen.css'
import cataContext from '../context/catagoryContext';
import EmptyPage from './EmptyPage';
export default function HomeScreen() {
    const [article, settate]= useState({});
    const a = useContext(phoneContext);
    const b = useContext(profileContext);
    const cata = useContext(cataContext) ;
    // const navigate = useNavigate() ;
    useEffect(()=>{async function fc () {
            if (localStorage.getItem('phone') != null) {
                a.func(localStorage.getItem('phone'), true);
                b.func(localStorage.getItem('phone'));
                // navigate('/');

            }
        
        let data = await fetch("http://localhost:3000/owner/find", {
            method: "POST",
            body: JSON.stringify(
                {"catagory":cata.query}
            ),
            headers: {
                "Content-Type": "application/json"
            }
        });
        let parsedata = await data.json();
        settate(parsedata);
    } fc();},[cata.query]);
    
  return (
    <div className='home'>
    
    <Carousel/>
    <center>
              <div className='row cardrow'>
              {(article.length==0)?<EmptyPage/>:Object.keys(article).map((element) => {
                  return <div className='col-md-4 my-3' key={article[element].id}>
                      {/* {console.log(article[element])} */}
                      <Card name={article[element].name} id={article[element].id} description={article[element].description} imageurl={article[element].imageurl} type={article[element].type} price={article[element].price} quantity={article[element].quantity} />
                  </div>
              })}
              
        
                </div>
          </center>
    </div>
  )
}
