import React, { useState } from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Button } from "@mui/material";

const Note = (props) => {

        const deleteNote = () => {
            props.delItems(props.id)
        };
        
    return (
        <>
        <div className="maindiv">
                <h1> {props.title} </h1>
                <p>{props.content} </p>
                <br></br>
                <Button onClick={deleteNote}><DeleteOutlineIcon className="delete-sign" /></Button>
        </div>
        </>
    )
}

export default Note;