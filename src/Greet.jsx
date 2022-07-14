/*

const time = new Date().getHours();
let greet = "";
let color = "";
if (time >= 1 && time <= 11) {
    greet = "GoodMorning";
    color = "orange";

}
else if (time >= 12 && time <= 18) {
    greet = "Good Afternoon";
    color = "gold";
}
else {
    greet = "Good Night";
    color = "black";
}

function Greet() {
    return (
        <div style={{ backgroundColor: 'blue', margin: '90px', padding: '50px', textAlign: "center" }}>
            <h1 style={{ color: "orange" }}>Hello Sir, <span style={{ color }}>{greet}</span></h1>
        </div>
    );
}

function greet1(){
    return <h1> this is the another function returning from the component</h1>
}
function warn(){
    return <h1> this is the the info that you can use as many functions as you want </h1>
}

const note = "you can send variables as much as you want"
export default Greet;
export {greet1, warn, note}

*/

// =============================================================================

function add(a, b){
    return a + b
}
function sub(a, b){
    return a - b
}
function div(a, b){
    return a / b
}
function mult(a, b){
    return a * b
}

export {add, sub, mult, div}