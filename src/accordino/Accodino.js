import React, { useState } from "react";
import { question } from "./api";
import MyAccordino from "./MyAccordino"
import "../index.css"
import "bootstrap/dist/css/bootstrap.min.css"

const Accord = () =>{

    const [data,setData] = useState(question)

    return(
        <React.Fragment>
        <section className="container-fluid">
        <h1>React Question</h1>
        {data.map((currentval)=>{
            const {id} = currentval;
            return <MyAccordino key={id}{...currentval}/>
            })
        }
        </section>
        </React.Fragment>
        )
}

export default Accord;