import React, { useContext } from "react";
import { Firstname, Lastname } from "./App";


const ComD = () => {
const fname = useContext(Firstname)
const lname = useContext(Lastname)
    return (
        <div>
        <h1>My name is {fname} {lname} using useContext</h1>
        </div>
    )
};

export default ComD;