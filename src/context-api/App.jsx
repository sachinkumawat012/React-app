import React, {createContext} from "react";
import ComA from "./ComA";
import ComC from "./ComC";

// creating the context 

const Firstname = createContext();
const Lastname = createContext();

const App = () => {
    return(<div>
        <Firstname.Provider value="Sachin">
        <Lastname.Provider value={'Kumawat'}>
        <ComC/>
        </Lastname.Provider>
        </Firstname.Provider>
        <Firstname.Provider value="Simmi"><ComA/></Firstname.Provider>
        <ComA/>
        </div>)

};

export default App;
export { Firstname, Lastname };