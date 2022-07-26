import React from 'react'
import {useSelector} from 'react-redux'

function Coin() {
    const count = useSelector((state)=>state.counter.count);
    const themecolor = useSelector((state)=>state.theme.color);
  return (
    <div>
     <span className='value' style={{color:themecolor}}>Coin:{count}</span>
    </div>
  )
}

export default Coin
