import React, { useState, useEffect } from 'react'
import "./../css/cartpage.css"
// import {
//   useNavigate
// } from "react-router-dom";
export default function CartRow(props) {
    // const navigate= useNavigate();
    const [ob, setobj] = useState("");
    const [quant, setquant] = useState(props.quantity);

    useEffect(() => {
        // console.log(props.id);
        async function fc() {
            let data = await fetch("http://localhost:3000/owner/detail",
                {
                    method: "POST",
                    body: JSON.stringify({
                        "id": props.id
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

            let gh = await data.json();
            setobj(gh);

        } fc();
    }, []);

    async function deleteit() {
        await fetch("http://localhost:3000/orders/delete",
            {
                method: "POST",
                body: JSON.stringify({
                    "id": props.id,
                    "phone": props.phone
                }),
                headers: {
                    "Content-Type": "application/json"
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
                await fetch("http://localhost:3000/orders/update",
                    {
                        method: "POST",
                        body: JSON.stringify({
                            "id": props.id,
                            "phone": props.phone,
                            "quantity": parseInt(quant)-1
                        }),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    });
            }


    }
    async function runnerp() {

        setquant(parseInt(quant) + 1);
        // console.log(parseInt(quant) + 1);

       
            await fetch("http://localhost:3000/orders/update",
                {
                    method: "POST",
                    body: JSON.stringify({
                        "id": props.id,
                        "phone": props.phone,
                        "quantity": parseInt(quant)  + 1
                    }),
                    headers: {
                        "Content-Type": "application/json"
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
