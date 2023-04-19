import React ,{Fragment,useState } from "react";
import {BiMoon} from "react-icons/bi";
import "../Styles/navbar.css";
import {BsCloudSun} from "react-icons/bs";
import Cards from "./Cards";
import { Routes, Route} from "react-router-dom"
import Details from "./Details";
export const Container = React.createContext();

function Navbar() {
    const [toggle,setToggle] = useState(false)
   
    return (
       <Container.Provider value={{toggle}}>
         <Fragment>
             <div id={!toggle? "mainBgColor" : "secondaryBgColor"}>
            <nav id={!toggle? "mainColor" : "secondaryColor"}>
            <h2 className={!toggle? "mainColor" : "secondaryColor"}>Where in the world?</h2>
            <div className="color_mode" onClick={() => setToggle(!toggle)}>
                <BiMoon fontSize="19px" id={!toggle? "display" : "noDisplay"} />
                <BsCloudSun fontSize="19px" id={!toggle? "noDisplay" : "display"} color="aliceblue" />
                <p className={!toggle? "mainColor" : "secondaryColor"}>{!toggle? "DarkMode" : "LightMode"}</p>
            </div>
        </nav>
        
         <Routes>
        <Route path="" element={<Cards/>} />
        <Route path="/country/:id" element={<Details/>}/>
      </Routes>
      </div>
           </Fragment>
       </Container.Provider>
    )
}

export default Navbar;