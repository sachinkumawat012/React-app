import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
import { valueToPercent } from "@mui/base";

const App = () => {

    const [addItem, setAddItem] = useState([])

    const addNote = (note) => {

        setAddItem((prevalue) => {
            return[...prevalue, note];
        });
    };

    const onDelete = (id) => {
        setAddItem((olddata) => 
            olddata.filter((currdata, indx) => {
                return indx !== id;
            })
            );
    };

    return(
        <>
        <div>
        <Header/>
        <Footer/>
        <CreateNote passNote={addNote}/>
      {addItem.map((val, index)=> {
            return (
                <Note 
            delItems = {onDelete}
            key = {index}
            id = {index}
            title = {val.title}
            content = {val.content}
        />
        )
    })}
        </div>
        </>
    );
};


export default App;