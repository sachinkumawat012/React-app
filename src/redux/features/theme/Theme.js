import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeTextcolor } from './themeSlice'


const Theme = () => {
    const [color, setColor] = useState("white")
    const dispatch = useDispatch()
  return (
    <div>
      <input type="text" className='textbox' onChange={(e)=>setColor(e.target.value)}/>
      <button onClick={()=>{dispatch(changeTextcolor(color))}}> Change the color</button>
    </div>
  )
}

export default Theme;
