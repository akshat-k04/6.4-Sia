import React from 'react'
import './../css/CartCard.css'
export default function CartPageCart() {
    return (
        <>

            <div class="outer">
                <div class="col">
                    1 of 3
                </div>
                <div class="col-6">
                    2 of 3 (wider)
                </div>
                <div class="col">
                    3 of 3
                </div>
            </div>

            <div className="outer">
                <div className="left">
                    <img className='img' src='/assets/siaLogo.jpg' ></img>
                    <div className="info">
                        <h6 className="nam">product name,{"(product id)"}</h6>
                        <p className="pric">price</p>
                    </div>
                </div>
                <div className="right">
                    <div className="operation">
                        

                            <center className="numbr">
                                quant
                                <span className="material-symbols-outlined rm">remove</span>
                                <span className="material-symbols-outlined add">add</span>
                            </center>
                            
                            <span className="material-symbols-outlined dlt" >delete</span>
                    
                    </div>
                </div>
            </div>
        </>
    )
}
