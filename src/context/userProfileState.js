import { useState } from "react";
import profileContext from "./userProfileContext";

const ProfileState = (props) => {
    const base = "https://siaback.onrender.com";

    const [name ,upname] = useState("");
    const [address, upaddress] = useState("");
    const [phone, upphone] = useState("");
    const [zip,upzip]=useState("") ;
    const [email ,setemail] = useState("") ;
    const [previousOrders , setOrders] = useState() ;
    async function func(email) {
        let res = await fetch(`${base}/auth/getdata`, {
            method: "POST",
            body: JSON.stringify({"email":email}),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "https://siaback.onrender.com"

            }
        });

        const rs = await res.json();
        // now the rs contain the data as object

        upname(rs.name);
        upphone(rs.phone) ;
        upaddress(rs.address) ;
        upzip(rs.zip) ;
        setemail(rs.email) ;

        // this is for order
        let wes = await fetch(`${base}/confirm/seeorder`, {
            method: "POST",
            body: JSON.stringify({ "email": email }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const ws = await wes.json();
        setOrders(ws) ;
    }
    return (
        <profileContext.Provider value={{ name,address,phone,zip,previousOrders,email , func }}>
            {props.children}
        </profileContext.Provider>
    )
}

export default ProfileState;