import React from "react";
import {add, sub, mult, div} from './Greet'

function Calc(){
    return (
    <ul>
    <li>Addition of two number is {add(40, 4)}</li>
    <li>Subtraction of two number is {sub(40, 4)}</li>
    <li>Multiplication of two number is {mult(40, 4)}</li>
    <li>Division of two number is {div(40, 9).toFixed(2)}</li>
    </ul>
    );
}

export default Calc;