import React , {useEffect,useState} from 'react'

export default function Carosoulcard(props) {
    const [img ,setImg] = useState() ;
    const base = "https://siaback.onrender.com";

    useEffect(() => {
        async function fc() {
            console.log(props.name);

            let data = await fetch(`${base}/carousal/getimg`,
                {
                    method: "POST",
                    body: JSON.stringify({
                        "name": props.name
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "https://siaback.onrender.com"

                    }
                });
            const imageBlob = await data.blob();
            const imageObjectURL = URL.createObjectURL(imageBlob);
            setImg(imageObjectURL);
            // console.log(imageBlob);
        } fc();
    }, []);
  return (
    <>
          <div className={(props.num == 0) ? "carousel-item active" : "carousel-item"} data-bs-interval="1000">
            
              <img src={img} height={200} className="d-block w-100" alt={props.name} />
          </div>
    </>
  )
}
