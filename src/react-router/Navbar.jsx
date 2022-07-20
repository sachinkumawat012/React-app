import React from "react";
import { Link, NavLink } from 'react-router-dom';
import './style.css'
const Navbar = () => {
    return(
        <div>
        <div className="menu_class">
        <a href="/">AboutUs </a><br/>
        <a href="/contact"> ContactUs</a>
        </div>
        <h1>Instead of using ancore tag use Link tag becose Link tag load the data without refreshing the page</h1>
        <Link to="/error"> ErrorPage</Link><br/>
        <Link to="/contact"> ContactUs</Link><br/>
        <Link to="/user"> User</Link><br/>
        <Link to="/"> AboutUs</Link><br/>
        <h1> Use NavLink fro batter experience</h1>
        <div className="menu_class">
        <NavLink to="/error"> ErrorPage</NavLink><br/>
        <NavLink to="/user"> User</NavLink><br/>
        <NavLink to="/contact"> ContactUs</NavLink><br/>
        <NavLink to="/search"> Search</NavLink><br/>
        <NavLink to="/"> AboutUs</NavLink><br/>
        </div>


        </div>
    );
};

export default Navbar;