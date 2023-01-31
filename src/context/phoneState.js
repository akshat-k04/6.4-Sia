import { useState } from "react";
import phoneContext from "./phoneContext";

const Phonestate =(props)=>{
    const [email, updateit] = useState({ 'email': "", "showDetails":false}) ;
    function func (email,shw){
        updateit({ "email": email,"showDetails":shw}) ;
    }
    return(
        <phoneContext.Provider value={{email,func}}>
            {props.children}
        </phoneContext.Provider>
    )
}

export default Phonestate ;