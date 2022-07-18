import React from "react";
import keep from './images/keep.png'
const Header = () => {
    return(
        <React.Fragment>
            <div className="header">
            <h3><img src={keep} alt="LOGO" width="70" height="50"></img>GoooogleKeeeep</h3>
            </div>
        </React.Fragment>
    )
}

export default Header;