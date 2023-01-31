import React, { useState, useEffect } from 'react'
import "./../css/cartpage.css"
// import {
//   useNavigate
// } from "react-router-dom";
export default function CartRow(props) {
    // const navigate= useNavigate();
    const [ob, setobj] = useState("");
    const [quant, setquant] = useState(props.quantity);
    const base = "https://siaback.onrender.com";

    useEffect(() => {
        // console.log(props.id);
        async function fc() {
            let data = await fetch(`${base}/owner/detail`,
                {
                    method: "POST",
                    body: JSON.stringify({
                        "id": props.id
                    }),
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "https://siaback.onrender.com"
                    }
                });

            let gh = await data.json();
            setobj(gh);

        } fc();
    }, []);

    async function deleteit() {
        await fetch(`${base}/orders/delete`,
            {
                method: "POST",
                body: JSON.stringify({
                    "id": props.id,
                    "email": props.email
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "https://siaback.onrender.com"
                }
            });
        console.log('done');
        window.location.reload();
        console.log('refreshed');
    }


    async function runnerr() {

        setquant(parseInt(quant) - 1);

            if (quant-1 <= 0) {
                deleteit();
            }
            else {
                await fetch(`${base}/orders/update`,
                    {
                        method: "POST",
                        body: JSON.stringify({
                            "id": props.id,
                            "email": props.email,
                            "quantity": parseInt(quant)-1
                        }),
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "https://siaback.onrender.com"
                        }
                    });
            }


    }
    async function runnerp() {

        setquant(parseInt(quant) + 1);
        // console.log(parseInt(quant) + 1);

       
        await fetch(`${base}/orders/update`,
                {
                    method: "POST",
                    body: JSON.stringify({
                        "id": props.id,
                        "email": props.email,
                        "quantity": parseInt(quant)  + 1
                    }),
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "https://siaback.onrender.com"
                    }
                });

    }
    return (
        <>

            {/* <input type="number" onChange={runner} className='quantity ' value={quant}></input> */}
            <tr className='rowing'>
                <th scope="row"><span className="material-symbols-outlined" onClick={deleteit}>delete</span></th>
                <td>{(ob == null) ? null : ob.name} </td>
                <td className="hidden-mobile">{(ob == null) ? null : ob.id}</td>
                <td>{(ob == null) ? null : ob.price}</td>
                <td> {quant}
                    <span onClick={runnerr} className="material-symbols-outlined">remove</span>
                    <span onClick={runnerp} className="material-symbols-outlined">add</span>
                </td>
                <td className="tot">{(ob == null) ? null : String(parseInt(ob.price) * parseInt(quant))}</td>
            </tr>
        </>
    )
}
