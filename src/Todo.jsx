import React, { useState } from "react";
import'./index.css'
import Todocomponent from "./Todocomponent";
const Todo = () => {

    const [inputList, setinputList] = useState('')
    const [item, setItem] = useState([]);    // initialize array in item
    const itemEvent = (event) => {

        setinputList(event.target.value)     //first store value in the  hook (inputList)
    };

    const listOfItems = () => {
        setItem((oldvalue) => {              //fetch oldvalue avaiable in the hook
            return [...oldvalue, inputList];   // add old and new value in the array
        });
        setinputList("")
    };

    const delItem = (id) =>{
        alert('want to delete item?')
        setItem((olditem) => {
            return olditem.filter((arrElement, index)=> {
                return index !== id;
            });
        })
    }
    
    return(
        <>
            <div className="maindiv">
                <div className="centerdiv">
                    <h1>Todo list</h1> <br></br>
                    <input  style={{
                        border:'None',
                        textDecoration: 'underline',
                        }} 
                        type='text' placeholder='Add todo list'
                        value={inputList}
                        onChange={itemEvent} />
                    <button onClick={listOfItems}> + </button>
                    <ul>
                    {item.map((itemvalue, index) => {
                        return(
                            <Todocomponent
                            key={index}
                            id={index}
                            val={itemvalue}
                            onSelect={delItem}
                        />
                        )
                    })}
                    </ul>
                </div>
            </div>
        </>
    )
}



export default Todo;