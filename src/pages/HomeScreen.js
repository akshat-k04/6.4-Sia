import React from 'react'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import './../css/homescreen.css'
export default function HomeScreen() {
  return (
    <>
    <center>
    <div className="homebox">
        <p>hiii</p>
    </div>
    </center>
    <Carousel/>

    <div className="row">
        <div className="col-md-3 my-3">
            <Card />
        </div>  
              <div className="col-md-3 my-3">
                  <Card />
              </div><div className="col-md-3 my-3">
                  <Card />
              </div><div className="col-md-3 my-3">
                  <Card />
              </div><div className="col-md-3 my-3">
                  <Card />
              </div> 
    </div>
    
    </>
  )
}
