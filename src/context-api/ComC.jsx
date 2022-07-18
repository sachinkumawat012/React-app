import React from "react";
import { Firstname } from "./App";

const ComC = () => {
    return (<div>
        <h1> Inside the COMC</h1>
        <Firstname.Consumer>{(fname) =>{
            return(<h1>My name is {fname}</h1>)
        }}</Firstname.Consumer></div>
    )
};

export default ComC;