import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";

const User = () =>{
    const {name, lname} = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    return(<>
        <h1>Hello I am  {name} the User  </h1>
        <h1>And my fullName is  {name} {lname}</h1>
        <p>Your path name is {location.pathname}</p>
        { location.pathname === `/user/sachin/kumawat` ? (<button onClick={()=> navigate('/')}>About Page</button>) : null}
        </>);
};

export default User;
