import React, { useEffect, useState } from "react";

const App = () => 
{
    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(5);
    useEffect(()=>{
        alert("You have clicked the button")
        document.title = `You clicke the button ${num} times`
    }, [num]);
    

    const btnClicked = () => {
        setNum(num + 1)
    };
    const Clicked = () => {
        setNums(nums + 1)
    };
    return(
        <div>
        <button onClick={btnClicked}> Click-Me {num}</button>
        <button onClick={Clicked}> Click {nums}</button>
        </div>
    )

};

export default App;