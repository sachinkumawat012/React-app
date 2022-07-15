import React, { useState } from "react";

const MyAccordino = ({Q,A}) =>{
    const [show, setShow] = useState(false)
    return(
        <React.Fragment>
        <div>
        <button onClick={()=> setShow(!show)}>{show ? "➖" : "➕"}</button>
        <h3>{Q}</h3>
        </div>
        {show && <p>{A}</p>}
        </React.Fragment>
    )
}

export default MyAccordino;