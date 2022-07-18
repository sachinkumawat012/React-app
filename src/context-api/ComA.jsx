import React, { createContext } from "react";
import ComB from "./ComB";

// const ComA = () => {

//     return (<div>
//         <h1> Inside the COMA</h1>
//         <ComB/>
//         </div>
//     )

const ComA = () => {

    return (
        <ComB/>
    )
};

export default ComA;