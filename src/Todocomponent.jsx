import React from "react";

const Todocomponent = (props) =>{
 
    return(
        <>
        <div>
            <li>{props.val}
            <button onClick={() =>
                props.onSelect(props.id)}> X </button>
            </li>
            
        </div>
        </>
    );
} ;

export default Todocomponent;