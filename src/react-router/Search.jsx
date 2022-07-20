import React, { useState } from "react";
import Sresult from "./Sresult";
import './style.css'
const Search = () =>{
    const [img, setImg] = useState("");

    const inputEvent = (event) =>{
        const data = event.target.value;
        setImg(data)
    }

    return(
        <div className="searchbar">
        <input type="text"
         placeholder="search your query"
         value={img}
         onChange={inputEvent}>
         </input>
        {img===""? null : <Sresult pic={img}/>}
        </div>
    );
};

export default Search;
