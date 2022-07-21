import React from "react";
import Comman from "./Common";
import web from './images/about.jpg'


const About = () =>{
    return(
        <Comman
            imgsrc={web} 
            visit="/about"
            btnname="About Us"/>
    )
}

export default About;

