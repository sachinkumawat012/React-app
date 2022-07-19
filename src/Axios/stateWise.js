import React, { useEffect } from "react";



const StateWise = () => {
    
    const getCovidData = async () =>{
        const response = await fetch('https://data.covid19india.org/data.json')
        const actualdata = await response.json()
        console.log(actualdata)
     }
     
     useEffect(()=>{
         getCovidData();
     }, []);

    return(
        <div style={{textAlign:'center'}}>INDIA COVID 19 DASHBOARD</div>
    )
}

export default StateWise;