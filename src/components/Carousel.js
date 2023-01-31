import React,{useEffect,useState} from 'react'
import EmptyPage from '../pages/EmptyPage';
import Carosoulcard from './carosoulcard';

export default function Carousel() {
    const [image , setimage] = useState("") ;
    const base = "https://siaback.onrender.com";


    useEffect(() => {
        async function fc() {
            

            let data = await fetch(`${base}/carousal/get`, {
                method: "POST",
                body: JSON.stringify(
                    { }
                ),
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "https://siaback.onrender.com"

                }
            });
            let parsedata = await data.json();
            setimage(parsedata) ;
        } fc();
    }, []);




  return (
    <>
          <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                  {/* <div className="carousel-item active" data-bs-interval="1000">
                      <img src="/assets/9.jpg" height={200} className="d-block w-100" alt="..."/>
                  </div> */}
                  {(image.length == 0) ? <EmptyPage /> : Object.keys(image).map((e) => {
                      return <Carosoulcard key={image[e].name} num={e}  name ={image[e].name}/>
                  })}
                  
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
              </button>
          </div>
    </>
  )
}
