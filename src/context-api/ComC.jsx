import React from "react";
import { Firstname, Lastname } from "./App";

const ComC = () => {
    return (<div>
        <h1> Inside the COMC</h1>
        <Firstname.Consumer>{(fname) =>{
            return(
                <Lastname.Consumer>{(lname) =>{
                    return (
                        <h1>My name is {fname} {lname}</h1>
                    )
                }}</Lastname.Consumer>
                )
        }}</Firstname.Consumer>
    </div>
    )
};

export default ComC;