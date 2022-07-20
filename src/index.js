// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

//   <h1>REACT APP</h1>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

//==============  OLD JAVASCRIPT SYNTAX  =====================//

// var React = require("react");
// var ReactDOM = require("react-dom");

// ReactDOM.render(<h1> hello from react </h1>, document.getElementById("root"));

//==============  NEW JAVASCRIPT SYNTAX  =====================//

import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

// ReactDOM.render(<h1>Hello from modern javascript </h1>, document.getElementById('root'));


// var h1 = document.createElement('h1');
// h1.innerHTML = 'Hello from pure javasript';
// document.getElementById('root').appendChild(h1);

// pass more then one element in the render method

// ReactDOM.render(
//     <div>
//         <h1>Hello from modern javascript wich have more then one element in the render</h1>
//         <p> just for <b>practice</b></p>
//         <h3> anohter element in the render method</h3>
//     </div>,
//     document.getElementById('root'));

// in above example can you the div tag as well and inside the div tag define more than one tag
/*
like
<div>
<h1>sdjksd</h1>
<p>sdfjhg</p>
</div>
 */


/* react fragment is use to avoid one node of the div element in the html 
for eg. in the above code if we check the element in the browser we get div
 inside the div just to avoid that div node we use react fragments*/

// ReactDOM.render(
//     <React.Fragment>
//         <h1>Hello from modern javascript wich have more then one element in the render</h1>
//         <p> just for <b>practice</b></p>
//         <h3> anohter element in the render method</h3>
//     </React.Fragment>,
//     document.getElementById('root'));

// syntactic suger form of the react fragment

// ReactDOM.render(
//     <>
//         <h1>Hello from modern javascript wich have more then one element in the render</h1>
//         <p> just for <b>practice</b></p>
//         <h3> anohter element in the render method</h3>
//     </>,
//     document.getElementById('root')
//     );

// JSX expresion===========================================================================

// const name = 'react tutorial';

// ReactDOM.render(
//     <>
//         <h1>JSX challange to create ordered list of neflix web series and {name}</h1>
//         <p>list of the 5 series</p>
//         <ol>
//         <li>abc</li>
//         <li>def</li>
//         <li>ghi</li>
//         <li>jkl</li>
//         <li>mno {5+5}</li>
//         </ol>
//     </>,
//     document.getElementById('root')
//     );



//============================ template literals================================

/*
const firstname = 'template';
const lastname = 'literals';

ReactDOM.render(
    <h1>
    {`thi is ${firstname} ${lastname} example!!...`}
    </h1>,
    document.getElementById('root')
    );
*/
//=================================================================================


//===========================JSX CHALLANGE-2=====================================

/*
const firstname = 'simmy';
let today =  new Date();
let date = today.toLocaleString("en-US", {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour12: true
});
let time =today.toLocaleString('en-US', { 
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true })

ReactDOM.render(
    [
    <h1>My name is {firstname}</h1>,
    <p>today's date is {date}</p>,
    <p>current time is {time}</p>
    ],
    document.getElementById('root')
    );
*/

// ==================================================================================

// =======================JSX ATTRIBUTS ======================================================

/*

const img2 = "https://picsum.photos/536/294";
const link = "https://picsum.photos/";

ReactDOM.render(
    <>
    <h1 contentEditable="true">My name is SAM</h1>
    <img src="https://picsum.photos/536/394" alt="An image" ></img>
    <a href={link} target="_blanc" > 
        <img src={img2} alt="image as a link" ></img>
    </a>
    </>,
    document.getElementById('root')
    );

*/
// ==================================================================================

// ===========================USE CSS IN JSX=========================================

// NOTE: In react use className instead of class becouse class is a reserved keyword in react

/*
import "./index.css";

const img2 = "https://picsum.photos/536/294";
const link = "https://picsum.photos/";

ReactDOM.render(
    <>
    <h1 className="heading" >My name is SAM</h1>
    <div className="img_div" >
    <img src="https://picsum.photos/536/394" alt="An image" ></img>
    <a href={link} target="_blanc" > 
        <img src={img2} alt="image as a link" ></img>
    </a>
    </div>
    </>,
    document.getElementById('root')
    );
*/

//===============================================================================

//===================INLINE CSS =============================================

/*

const img2 = "https://picsum.photos/536/294";
const link = "https://picsum.photos/";

// create object and use it un the style attribute 
const footer = {
    color:"#fa9191",
    textTransform:"capitalize",
    textAlign:"center",
    fontWeight: 'bold',
    textShadow:'0px, 20px, 4px, red',
    margin: "70px 0",
    fontFamily: "'josefin Sans' sens-serif"

}

ReactDOM.render(
    <>
    <h1 style={{color:"green", textTransform:"capitalize", textAlign:"center"}}>My name is SAM</h1>
    <div className="img_div" >
    <img src="https://picsum.photos/536/394" alt="An image" ></img>
    <a href={link} target="_blanc" > 
        <img src={img2} alt="image as a link" ></img>
    </a>
    <h1 style={footer}> This is footer</h1>
    </div>
    </>,
    document.getElementById('root')
    );
*/

// =============================================================================


// ================ REACT CHALLANGE 3 CREATE GREETING APP =======================

/*
const time = new Date().getHours();
let greet = "";
let color = "";
if (time >=1 && time <=11) {
    greet = "GoodMorning"
    color = "orange"

} 
else if (time >=12 && time<=19) {
    greet = "Good Afternoon"
    color = "gold"
  } 
else {
    greet = "Good Night"
    color = "black"
  }

ReactDOM.render(
    <div style={{ backgroundColor:'blue', margin:'90px', padding:'50px', textAlign:"center"}}>
    <h1 style={{color:"orange"}}>Hello Sir, <span style={{color}}>{greet}</span></h1>,
    </div>,
    document.getElementById('root')
    );
   
 */
//==================================================================================

//======================== COMPONENT IN REACT =================================
/*
import Heading from './Heading'   //import from Heading.jsx
import List from './List'
import APP from './App'
ReactDOM.render(
    <>
    <APP/>
    <Heading></Heading>
     OR we can use 
     
    <Heading/> only if there no chiled available in the component

     This is known as SELF CLOSING TAG
    <p>This is an paragraph</p>
    <List/>
    </>,
    document.getElementById("root")
);
*/
// ================================================================================

// ============================USING APP JS MASTER COMPONENT =========================================

/*
import App from './App'

ReactDOM.render(
    <>
    <App></App>
    </>,
    document.getElementById("root")
);
*/
//==================================================================================

//===========SEND MORE THAN ONE FUNCTION OR VARIABLE FROM THE COMPONENT============

/*
import Greet, {greet1, warn, note} from './Greet'

ReactDOM.render(
    <>
    <Greet/>
    <h1>{greet1()}</h1>
    <h1>{warn()}</h1>
    <h1>{note}</h1>
    </>,
    document.getElementById('root')
    );
*/

//==================================================================================

//====================== CALCULATOR IN THE REACT JS ==============================
/*
import Calc from './List'

ReactDOM.render(
    <Calc/>,
    document.getElementById('root')
    );  

 */
//================================================================================

//==========================PROPS IN THE REACT JS======================================

/*
import Props from './Heading'

ReactDOM.render(
    <>
    <Props imgsrc="https://im.indiatimes.in/content/2020/Aug/money-heist_5f4617cae7388.jpeg?w=725&h=407"
        category="A  Netflix original web series!"
        title="DARK"
        link="https://www.netflix.com/in/"
    />,
    <Props imgsrc="https://www.reviewsxp.com/blog/wp-content/uploads/2019/01/Sacred-Games-800x437.jpg"
        category="A  Netflix original web series!"
        title="Scared games"
        link="https://www.netflix.com/in/"
    />
    </>,
    document.getElementById('root')
);  
 */
//================================================================================

//========================== USING AN ARRAY OF OBJECTS ====================================
/*
import Seriesdatarray from './Seriesdatarray';
import Props from './Heading';
import './index.css';

ReactDOM.render(
    <>
    <h1 className='heading'> TOP 2 SERIES WATCHED IN INDIA ON Netflix</h1>
    <Props 
    imgsrc = {Seriesdatarray[0].imgsrc}
    category = {Seriesdatarray[0].category}
    title = {Seriesdatarray[0].title}
    link = {Seriesdatarray[0].link}
    />,
    <Props 
    imgsrc = {Seriesdatarray[1].imgsrc}
    category = {Seriesdatarray[1].category}
    title = {Seriesdatarray[1].title}
    link = {Seriesdatarray[1].link}
    />
    </>,
    document.getElementById('root')
);
*/
// ===================================================================================

// ===========================Array using map function========================================

/*
import Seriesdatarray from './Seriesdatarray';
import Props from './Heading';
import './index.css';

function ncard(val){
    console.log(val)
    return (
        <Props 
        key = {val.id}
        imgsrc = {val.imgsrc}
        category = {val.category}
        title = {val.title}
        link = {val.link}
        />
    );
}

ReactDOM.render(
    <>
    <h1 className='heading'> TOP 2 SERIES WATCHED IN INDIA ON Netflix</h1>
     {Seriesdatarray.map(ncard)}
    </>,
    document.getElementById('root')
);

 */

// ===============================================================================

//========================TERNURRY OPERATOR IN REACT=========================================

// turnary operator syntax
// condition ? expressionifTrue : expressionifFalse
/*
const randomNumber = Math.floor((Math.random() * 100) + 1);
console.log(randomNumber)
const greater = `the random number is greater than fifty and the number is ${randomNumber}`
const lesser = `the random number is lesser than fifty and the number is ${randomNumber}`


randomNumber >=51 ? console.log(greater) : console.log(lesser)
 */
// =================================================================================

// ================Slot matching challenge ========================================

/*
import App from './App'

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
 */
// ===================================================================================

// =======================Show current time on click event on the web page========================================

// import App from './App'

/*
import { useState } from "react";
import './index.css'

const App = () => {
  let newtime =  new Date().toLocaleTimeString();

  const [time, setCtime] = useState(newtime)

  const CurrentTime = () => {
    newtime =  new Date().toLocaleTimeString();
    setCtime(newtime)
      }
  return (
    [
    <div>
    <h1>{time}</h1>
    <button onClick={CurrentTime}>Get Time</button>
    </div>
  ]
)
};
ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
*/

// ================================================================================
/*
import { useState } from "react";
import './index.css'

const App = () => {
  let newtime =  new Date().toLocaleTimeString();

  const [time, setCtime] = useState(newtime)

  const CurrentTime = () => {
    newtime =  new Date().toLocaleTimeString();
    setCtime(newtime)
      };
    setTimeout(CurrentTime,1000)
  return (
    [
    <div>
    <h1>{time}</h1>
    </div>
  ]
)
};
ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
*/
// ===========================================================================

// ==================SLOT MATCHING GAME ======================================

/*
import { useState } from "react";
import './index.css'

const App = () => {
  const newbg = "purple"
  const [bg, setBg] = useState(newbg)
  const [name, setName] = useState('ClickMe')

  const Getstyle = () => {
    let col = 'cyan'
    setBg(col);
    setName("ouch!! 😠" );
  };
  const Getstyle1 = () => {
      setBg(newbg);
      setName("Ayyyo!!! 😠" );
  };
  return (
    <div style={{backgroundColor:bg}}>
    <button onDoubleClick={Getstyle} onMouseOut={Getstyle1}>{name}</button>
    </div>
)
}

ReactDOM.render(
    <App/>, 
    document.getElementById('root')
)

*/
// ===========================================================================


// ================================= REACT FORMS ===================================
/*
import { useState } from "react";
import './index.css'

const App = () => {
    const [fullname, setFullName] = useState('')
    const [name, setName] = useState('')

    const inpuEvent = (event) => {
        setName(event.target.value)
   
    };
   const fullName = () => {
    setFullName(name)
  };
  return (
    <div style={{backgroundColor: 'cyan' }}>
    <h1> Hello Mr. {fullname}</h1>
    <input style={{margin:20,
        marginBottom: 20}} type='text'
     placeholder='Enter your full name'
     onChange={inpuEvent}
     value={name}>
     </input>
     <button onClick={fullName} style={{backgroundColor:'purple'}}>Click-Me</button>
    </div>
)
}

ReactDOM.render(
    <App/>, 
    document.getElementById('root')
)
*/
// ==================================================================================

// ==========================REACT FORM USING FORM TAG=================================
/*
import './index.css'

const App = () =>{

    const [name, setName]  = useState();
    const [fullname, setFullName]  = useState();
    const [LastName, setLastName]  = useState();
    const [last, setLast] = useState();

    const onSubmit = (event) => {
        event.preventDefault();
        setFullName(name)
        setLast(LastName)
    };

    const inputEvent = (event) => {
        setName(event.target.value);
    };
    const inputEvent1 = (event) => {
        setLastName(event.target.value);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h1> Hello Mr. {fullname} {last} </h1>
                <input style={{
                            margin:20,
                            marginBottom: 20}} type='text'
                            placeholder='Enter your full name'
                            onChange={inputEvent}
                            value={name}>
                </input><br></br>
                <input style={{
                    margin:20,
                    marginBottom: 20}} type='text'
                    placeholder='Enter your last name'
                    onChange={inputEvent1}
                    value={LastName}>
                </input><br></br>
                <button type='submit' style={{backgroundColor:'purple'}}>Click-Me</button>
            </form>
        </div>
    )
}

ReactDOM.render(
        <App/>, 
        document.getElementById('root')
    )
*/

// =================================================================================


// =============== MULTIPLE INPUT FORMS ===========================================
/*
import './index.css'

const App = () =>{

    const [fullname, setFullName]  = useState({
        fname : '',
        lname : '',
        email : '',
        phone : '',
    });

    const inputEvent = (event) => {

        console.log(event.target.value)
        // const value = event.target.value
        // const name = event.target.name
        
        // OR WE CAN WRITE THE ABOVE LINE LIKE THIS

        const {name,value} = event.target

        setFullName((prevalue) =>{
            if (name === 'fname'){
                return {
                fname: value,
                lname: prevalue.lname,
                email: prevalue.email,
                phone : prevalue.phone
            };
            }else if( name === 'lname'){
                return {
                    fname: prevalue.fname,
                    lname: value,
                    email: prevalue.email,
                    phone : prevalue.phone

                };
            }else if( name === 'email'){
                return {
                    fname: prevalue.fname,
                    phone : prevalue.phone,
                    lname: prevalue.lname,
                    email: value,
                };
            } else {
                return{
                    fname: prevalue.fname,
                    lname: prevalue.lname,
                    email: prevalue.email,
                    phone : value

                    };
                }
            }
        )
    };

    const onSubmit = (event) => {
        event.preventDefault();
        alert('form-submitted')
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h1> Hello Mr. {fullname.fname} {fullname.lname}</h1>
                <h3> { fullname.email }<br></br> { fullname.phone }</h3>
                <input style={{
                    margin:20,
                    marginBottom: 20}} type='text'
                    placeholder='Enter your first name'
                    onChange={inputEvent}
                    name = 'fname'
                    value={fullname.fname}>
                </input><br></br>
                <input style={{
                    margin:20,
                    marginBottom: 20}} type='text'
                    placeholder='Enter your last name'
                    onChange={inputEvent}
                    name = 'lname'
                    value={fullname.lname}>
                </input><br></br>
                <input style={{
                    margin:20,
                    marginBottom: 20}} type='text'
                    placeholder='Enter your email'
                    onChange={inputEvent}
                    name = 'email'
                    type = 'email'
                    value={fullname.email}>
                </input><br></br>
                <input style={{
                    margin:20,
                    marginBottom: 20}} type='text'
                    placeholder='Enter your phone'
                    onChange={inputEvent}
                    name = 'phone'
                    type = 'number'
                    value={fullname.phone}>
                </input><br></br>
                <button type='submit' style={{backgroundColor:'purple'}}>Click-Me</button>
            </form>
        </div>
    )
}

ReactDOM.render(
        <App/>, 
        document.getElementById('root')
    )

*/

// ===============USE OF THREE DOTS ====================================================
/*
const count = [11,22,33,44,55,66,77,88,99,100]       //ARRAY
const shootinggames = ['call of duty', 'pubg', 'shoot', 'far cry']
const racinggames = ['need for speed', 'ruenout', 'run', 'racingmenia']

let [first, ...remaining] = count  // 11 WILL STORE IN FIRST AND OTHER VALUES STORED IN THE REMAINING 
let games = [...shootinggames, ...racinggames]  //USING THREE DOTES WE CAN USE THAT OBJECT

console.log(games)
console.log(first)
console.log(remaining)


// we can use one object in other object as well

const words = {
  first : 'hello',
  second : 'hey',
  thired : 'hi'
}

const morewords = {
    ...words,           //values of another object 
    fourth : 'welcome'       

}
console.log(morewords)
*/

// ====================================================================================

// ====================USE SPREAD OPERATOR LOGIN FORM===========================================
/*
import './index.css'

const App = () =>{

    const [fullname, setFullName]  = useState({
        fname : '',
        lname : '',
        email : '',
        phone : '',
    });

    const inputEvent = (event) => {

        console.log(event.target.value)
        // const value = event.target.value
        // const name = event.target.name
        
        // OR WE CAN WRITE THE ABOVE LINE LIKE THIS

        const {name,value} = event.target

        setFullName((prevalue) =>{
            // if (name === 'fname'){
            //     return {
            //     fname: value,
            //     lname: prevalue.lname,
            //     email: prevalue.email,
            //     phone : prevalue.phone
            // };
            // }else if( name === 'lname'){
            //     return {
            //         fname: prevalue.fname,
            //         lname: value,
            //         email: prevalue.email,
            //         phone : prevalue.phone

            //     };
            // }else if( name === 'email'){
            //     return {
            //         fname: prevalue.fname,
            //         phone : prevalue.phone,
            //         lname: prevalue.lname,
            //         email: value,
            //     };
            // } else {
            //     return{
            //         fname: prevalue.fname,
            //         lname: prevalue.lname,
            //         email: prevalue.email,
            //         phone : value

            //         };
            //     }

            // we can use instead of above code

            return{
                ...prevalue,
                [name] : value,
            }
            }
        )
    };

    const onSubmit = (event) => {
        event.preventDefault();
        alert('form-submitted')
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h1> Hello Mr. {fullname.fname} {fullname.lname}</h1>
                <h3> { fullname.email }<br></br> { fullname.phone }</h3>
                <input style={{
                    margin:20,
                    marginBottom: 20}} type='text'
                    placeholder='Enter your first name'
                    onChange={inputEvent}
                    name = 'fname'
                    value={fullname.fname}>
                </input><br></br>
                <input style={{
                    margin:20,
                    marginBottom: 20}} type='text'
                    placeholder='Enter your last name'
                    onChange={inputEvent}
                    name = 'lname'
                    value={fullname.lname}>
                </input><br></br>
                <input style={{
                    margin:20,
                    marginBottom: 20}} type='text'
                    placeholder='Enter your email'
                    onChange={inputEvent}
                    name = 'email'
                    value={fullname.email}>
                </input><br></br>
                <input style={{
                    margin:20,
                    marginBottom: 20}} type='number'
                    placeholder='Enter your phone'
                    onChange={inputEvent}
                    name = 'phone'
                    value={fullname.phone}>
                </input><br></br>
                <button type='submit' style={{backgroundColor:'purple'}}>Click-Me</button>
            </form>
        </div>
    )
}

ReactDOM.render(
        <App/>, 
        document.getElementById('root')
    )
*/

// ===================================================================================

//importent files are Todo.jsx and Todocomponent.jsx
/*
import './index.css'
import Todo from './Todo'

ReactDOM.render(
    <Todo/>,
    document.getElementById('root')
)
*/


// =========================USE MATERIAL UI icons=============================================
/*
import './index.css';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import Clock from 'react-digital-clock';


const Incdec = () =>{
    const [num, setNum] = useState(0)
    const incrementNum = () =>{
        setNum(num +1)
    }
    const dicrementNum = () =>{
        if (num > 0){
        setNum(num - 1)
    }else{
        setNum(0)
        alert('cant dicrease after zero')
    }
}
    return(
        <>
            <div className='maindiv'>
                <div className='centerdiv'>
                    <h1>{num}</h1>
                    <div className='incdec_btn'>
                     <Button onClick={incrementNum}>
                     <AddCircleIcon/>
                     </Button>
                     <button onClick={dicrementNum}>
                     <DeleteIcon/>
                     </button>
                    </div>
                </div>
            </div>
        </>
    );
}

ReactDOM.render(
    <Clock/>,
    document.getElementById('root')
)

*/

// =======================STYLED COMPONENTS===============================================
/*
import './index.css'
import styled from 'styled-components'

const Style =  () => {

    const Div = styled.div`
        background-color: green;
        color: ${(props)=>props.col};
        width: 100%;
        height:100%;
        flex-direction: column;
        border: 2px solid sandybrown;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: capitalize;
        `
    // Instead of using saperate variables for every styled component we can wrap styled components in wrappers
    // we can use variable as well
    
    const myfavcolor = "gold"

    const Wrapper = styled.section`
    button{
        background-color: aquamarine;
        color: darkorange;
        border-radius: 50px;

    &:focus{
        box-shadow: #3c4fe0 0 0 0 1 1.5px inset, rbga(45,35,66,0.4) 0 2px 4px,
        rbga(45,35,66,0.4) 0 7px 13px -3px, #3c4fe0 0 -3px inset;
    }
    &:hover{
        color:cadetblue;
    }
   
    }
// NESTING OF styled components p->span->b
    p{
        color: ${myfavcolor};
        font-size: 20px;
        font-weight: 500;
        span{
            color:orange;
            b{
                color:yellow
            }
        }
    }
}
    `

    return(
        <>
        <Div col='red'> styled components 
        <Wrapper>
            <button bg='green'>TestingButton</button>
            <p>Many of our components require <span>the use of JavaScript to function</span>. <b> Specifically,</b> they require our own JavaScript plugins and Popper.</p>
        </Wrapper>
        </Div>
        </>
    )
}

ReactDOM.render(
    <Style/>,
    document.getElementById('root')
)
*/

// ==========================THEME PROVIDER STYLED COMPONENT=======================================
/*
import './index.css'
import styled, {ThemeProvider} from 'styled-components'

const Style =  () => {

    const theme = {
        color:{
            textColor:'red',
            backgroundcolor:'cadetblue',
        },
        };

    const Div = styled.div`
        background-color: ${({theme}) => theme.color.backgroundcolor};
        color: ${(props)=>props.col};
        width: 100%;
        height:100%;
        flex-direction: column;
        border: 2px solid sandybrown;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: capitalize;
        `
    // Instead of using saperate variables for every styled component we can wrap styled components in wrappers
    // we can use variable as well
    
    const myfavcolor = "gold"

    const Wrapper = styled.section`
    button{
        background-color: cyan;
        color: darkorange;
        border-radius: 50px;

    &:focus{
        box-shadow: #3c4fe0 0 0 0 1 1.5px inset, rbga(45,35,66,0.4) 0 2px 4px,
        rbga(45,35,66,0.4) 0 7px 13px -3px, #3c4fe0 0 -3px inset;
    }
    &:hover{
        color:cadetblue;
    }
   
    }
// NESTING OF styled components p->span->b
    p{
        color: ${myfavcolor};
        font-size: 20px;
        font-weight: 500;
        span{
            color:orange;
            b{
                color:yellow
            }
        }
    }
}
    `
    return(
        <ThemeProvider theme={theme}>
        <Div col='red'> styled components 
        <Wrapper>
            <button bg='green'>TestingButton</button>
            <p>Many of our components require <span>the use of JavaScript to function</span>. <b> Specifically,</b> they require our own JavaScript plugins and Popper.</p>
        </Wrapper>
        </Div>
        </ThemeProvider>
    )
}

ReactDOM.render(
    <Style/>,
    document.getElementById('root')
)
*/

// =================== GLOBAL STYLE COMPONENT =====================================

/*
// import './index.css'     // instead of using external css use globalstylecomponent


import { GlobalStyle } from './Globalstylecomponent'
import styled, {ThemeProvider} from 'styled-components'

const Style =  () => {

    const theme = {
        color:{
            textColor:'red',
            backgroundcolor:'cadetblue',
        },
        };

    const Div = styled.div`
        background-color: ${({theme}) => theme.color.backgroundcolor};
        color: ${(props)=>props.col};
        width: 100%;
        height:100%;
        flex-direction: column;
        border: 2px solid sandybrown;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: capitalize;
        `
    // Instead of using saperate variables for every styled component we can wrap styled components in wrappers
    // we can use variable as well
    
    const myfavcolor = "gold"

    const Wrapper = styled.section`
    button{
        background-color: cyan;
        color: darkorange;
        border-radius: 50px;

    &:focus{
        box-shadow: #3c4fe0 0 0 0 1 1.5px inset, rbga(45,35,66,0.4) 0 2px 4px,
        rbga(45,35,66,0.4) 0 7px 13px -3px, #3c4fe0 0 -3px inset;
    }
    &:hover{
        color:cadetblue;
    }
   
    }
// NESTING OF styled components p->span->b
    p{
        color: ${myfavcolor};
        font-size: 20px;
        font-weight: 500;
        span{
            color:orange;
            b{
                color:yellow
            }
        }
    }
}
    `
    return(
        <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Div col='red'> styled components 
        <Wrapper>
            <button bg='green'>TestingButton</button>
            <p>Many of our components require <span>the use of JavaScript to function</span>. <b> Specifically,</b> they require our own JavaScript plugins and Popper.</p>
        </Wrapper>
        </Div>
        </ThemeProvider>
    )
}

ReactDOM.render(
    <Style/>,
    document.getElementById('root')
)
*/
// =========================================================================

// =======================USE BOOTSTRAP IN THE REACT ==========================
/*
import Boot from './bootsp'


ReactDOM.render(
    <Boot/>,
    document.getElementById('root')
)
*/
// =====================================================================

// ====================Accordino example ==========================================
/*
import Accord from './accordino/Accodino'

ReactDOM.render(
    <Accord/>, document.getElementById('root')
)
*/

// =============================================================================

// ================================google keep clone=====================================
/*
import App from './google-keep/App'


ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
*/
// =================================================================================

// ============================CONTEXT API ===========================================
/*
import App from './useEffects/App'

ReactDOM.render(
    <App/>,
    document.getElementById('root'))
*/
// ===============================================================================


// =========================STATE WISE COVID TRACKER============================================
/*
import App from './Axios/App'

ReactDOM.render(
    <App/>,
    document.getElementById('root'))
*/
// ===============================================================================


// =============================== REACT ROUTER ==================================

import { BrowserRouter } from 'react-router-dom'

import App from './react-router/App'

ReactDOM.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>,
    document.getElementById('root'))