// import logo from './logo.svg';
// import './App.css';
// import Heading from './Heading'   //import from Heading.jsx
// import List from './List'
// import APP from './App'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <Heading></Heading>
//         <List />
//       </header>
//     </div>
//   );
// }

// export default App;
// ============================================================================

// ==================Slot matching challenge ===============================================

/*
import'./index.css'
import React from "react";

const SlotM = (props) => {
  // let x =  props.x;
  // let y =  props.y;
  // let z =  props.z ;

  let {x,y,z} = props    //object distructuring 
  if (x===y && y===z){
    return( 
      [
      <div className='slot_inner'>
        <h1>
        {x} {y} {z} 
        </h1>,
        <h1> This is a match </h1>,
      </div>,
      <hr />
      ]
    );
    }
    else{
      return( 
        [
        <div className='slot_inner'>
          <h1>
          {x} {y} {z} 
          </h1>,
          <h1> This is not a match </h1>,
        </div>,
        <hr />,
      ]
      );
    }
};

const App = () => {
  return <>
  <h1 className="heading_style" >🎰  Welcome to <span>Slot matching game </span> 🎰  </h1>
  <div className='box'>
  <SlotM x = '😇' y = '😇' z = '😇'/>
  <SlotM x = '🍎'  y = '🍌'  z = '🍎' />
  <SlotM x = '🥤'  y = '🥤'  z = '🥤'/>
  <SlotM x = '🧁'  y = '📣' z = '📣'/>
  </div>
  </>
}

export default App
 */
// ====================================================================================


// =======================React Hooks ===============================================
/*
import React, { useState } from "react";
import './index.css'

const App = () => {

  const state = useState;
  const [count, setCount ] = state(0)

  const IncrementNumber = () => {
    setCount(count + 1)
      }
  return (
    [
    <div>
    <h1>{count}</h1>
    <button onClick={IncrementNumber}>Click-Me</button>
    </div>
  ]
)
};

export default App;
*/
// ====================================================================================
