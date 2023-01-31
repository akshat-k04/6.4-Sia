import React ,{useState,useEffect }from 'react'
import './../css/CartCard.css'
export default function CartPageCart(props) {
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

        if (quant - 1 <= 0) {
            deleteit();
        }
        else {
            await fetch(`${base}/orders/update`,
                {
                    method: "POST",
                    body: JSON.stringify({
                        "id": props.id,
                        "email": props.email,
                        "quantity": parseInt(quant) - 1
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
                    "quantity": parseInt(quant) + 1
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "https://siaback.onrender.com"
                }
            });

    }
    return (
        <>
{/* <div className="outer"> */}
            <div className="container-sm text-center my-3">
                <div className="row">
                    <div className="col-2 imgCol">
                        <img className='img' src='/assets/siaLogo.jpg' ></img>

                    </div>
                    <div className="col-5 infoCol">
                        <div className="info">
                            <h6 className="nam">{(ob == null) ? null : ob.name}</h6>
                            {/* <p>{(ob == null) ? null : ob.id}</p> */}
                            <p className="pric">{(ob == null) ? null : ob.price+"/-"}</p>
                        </div>
                    </div>
                    {/* <div class="col-3 empty">
                        

                    </div> */}
                    <div className="col-5 quantCol">
                        <div className="numbr">
                            <span className="material-symbols-outlined dlt" onClick={deleteit}>delete</span>
                            <span onClick={runnerr} className="material-symbols-outlined rm">remove</span>

                            <span >{quant}</span>
                            <span onClick={runnerp} className="material-symbols-outlined add">add</span>
                        </div>

                    </div>
                </div>
            </div>
            {/* </div> */}


        </>
    )
}
