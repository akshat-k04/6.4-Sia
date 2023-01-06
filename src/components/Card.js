import React from 'react'

export default function Card(props) {
  return (
    <>
          <div className="card w-100" >
        <img src="" className="card-img-top"  width={10} alt="..."/>
                  <div className="card-body">
                      <h5 className="card-title">{props.name}</h5>
                      <p className="card-text">{props.disc}</p>
                      <a href="/" className="btn btn-primary">{props.price}</a>
                  </div>
          </div>
    </>
  )
}
