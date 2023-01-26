import { useState } from "react";
import cataContext from "./catagoryContext";

const Catastate = (props) => {
    const [query, setQuery] = useState("catagory");
    function func(cata) {
        setQuery(cata) ;
    }
    return (
        <cataContext.Provider value={{ query, func }}>
            {props.children}
        </cataContext.Provider>
    )
}

export default Catastate;