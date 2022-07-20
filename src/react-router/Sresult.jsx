import React from "react";

const Sresult = (props) => {
    console.log(props.pic)
    const img = `https://source.unsplash.com/400×300/?${props.pic}`
    // const img1 = `https://api.unsplash.com/photos/random?count=${props.pic}`
    return(
        <div>
        <img src={img} alt="search"
    />
        </div>
    );
};
export default Sresult;