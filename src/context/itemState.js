import { useState } from "react";
import itemContext from "./itemContext";

const Itemstate = (props) => {
    const [itemInfo, updateit] = useState('');
    function funct(id,name,quantity, price , description ,type ,img) {
        updateit({
            "id":id ,
            "name":name ,
            "quantity":quantity ,
            "price":price ,
            "description":description ,
            "type":type ,
            "imageurl":img
        });
    }
    return (
        <itemContext.Provider value={{ itemInfo, funct }}>
            {props.children}
        </itemContext.Provider>
    )
}

export default Itemstate;