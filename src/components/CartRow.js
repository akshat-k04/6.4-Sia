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


    async function runner(event) {

        if (event.target.value.length >= 1) {
            setquant(event.target.value);

            if (parseInt(event.target.value) <= 0) {
                deleteit();
            }
            else {
                await fetch("http://localhost:3000/orders/update",
                    {
                        method: "POST",
                        body: JSON.stringify({
                            "id": props.id,
                            "phone": props.phone,
                            "quantity": event.target.value
                        }),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    });
            }
        }
        else {
            setquant(0);
        }


    }
    return (
        <>


            <tr className='table-warning'>
                <th scope="row"><span className="material-symbols-outlined " onClick={deleteit}>delete</span></th>
                <td>{(ob == null) ? null : ob.name} </td>
                <td className="hidden-mobile">{(ob == null) ? null : ob.id}</td>
                <td>{(ob == null) ? null : ob.price}</td>
                <td><input type="number" onChange={runner} className='quantity ' value={quant}></input></td>
                <td className="tot">{(ob == null) ? null : String(parseInt(ob.price) * parseInt(quant))}</td>
            </tr>
        </>
    )
}
