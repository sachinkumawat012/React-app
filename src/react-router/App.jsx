import React from "react";
import { Route, Routes, Redirect } from "react-router-dom";
import About from './About'
import Contact from './Contact'
import Error from "./Error";
import Navbar from "./Navbar";
import User from "./User";
import Search from "./Search";

const App = () =>{
    return (
        <div>
        <Navbar/>
            <Routes>
                <Route path="/" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/search" element={<Search/>} />
                <Route path="/user/:name/:lname" element={<User/>}/>
                /* pass params in the Route component */
                <Route path="/error" element={<Error name="Error1" />} />
            </Routes>
        </div>  
  );
}

export default App;