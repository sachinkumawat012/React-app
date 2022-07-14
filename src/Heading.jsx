import React from "react";

// function Heading(){
//     return <h1>Hello from the component</h1>
// }

// export default Heading;

import Images from "./Images";

function Props(props) {
    return (
        <div className="cards">
            <div className="card">
                <Images imgsrc={props.imgsrc} />
                <div className="card_info">
                    <span className="category">A netflix original series OR {props.category}</span>
                    <h1 className="title">Money Hiest OR {props.title}</h1>
                    <a href={props.link} target="_blank"
                    >
                        <button>Watch Now </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Props;