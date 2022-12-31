import { useState } from "react";
import phoneContext from "./phoneContext";

const Phonestate =(props)=>{
    const [phone, updateit] = useState({ 'number': "", "showDetails":false}) ;
    function func (phon,shw){
        updateit({ "number": phon,"showDetails":shw}) ;
    }
    return(
        <phoneContext.Provider value={{phone,func}}>
            {props.children}
        </phoneContext.Provider>
    )
}

export default Phonestate ;