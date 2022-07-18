import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    const inputEvent = (event) =>{

        const {name, value} = event.target

        setNote((prevalue) =>{
            return{...prevalue,
            [name]: value,
        };
    }); 
 };

    const addEvent = () => {

        props.passNote(note)
        setNote({
            title: "",
            content: ""
        })

    };

    return (
        <>
        <div className="maindiv">
            <form>
                <input value={note.title} name="title" onChange={inputEvent} type="text" placeholde="Title"></input>
                <textarea value={note.content} name="content" onChange={inputEvent} rows="" column="" placeholder="Write a note"></textarea>
                <Button onClick={addEvent}>
                <AddIcon className="plus-sign" />
                </Button>
            </form>
        
        </div>
        </>
    )
}

export default CreateNote;