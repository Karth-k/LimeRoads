import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";

import Navbar from "../components/Navbar";
import Profile from "../Pages/Profile";
import Men from "../Pages/Men"
import Women from "../Pages/Women"
import Kids from "../Pages/Kids";
import Homepr from "../Pages/Homepr"



const AllRoutes = ()=>{
    return(<div>
     
        <Navbar/>   
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
            <Route path="/men" element={<Men/>}></Route>
            <Route path="/women" element={<Women/>}></Route>
            <Route path="/kids" element={<Kids/>}></Route>
            <Route path="/homepr" element={<Homepr/>}></Route>
        </Routes>
        
            
      
    

        </div>)
}

export default AllRoutes;