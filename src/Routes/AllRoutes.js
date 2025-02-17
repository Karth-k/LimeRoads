import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";

import Navbar from "../components/Navbar";
import Profile from "../Pages/Profile";
import Men from "../Pages/Men"
import Women from "../Pages/Women"
import Kids from "../Pages/Kids";
import Homepr from "../Pages/Homepr";
import Cart from "../Pages/Cart";
import ProductDetailsPage from '../components/ProductDetailsPage'
import SubCategoryPage from "../components/SubCategoryPage";
import CategorySection from "../components/CategorySection";
import Footer from "../components/Footer";
// import Landingpage from "../Pages/Landingpage";
import RelatedProducts from "../Pages/RelatedProducts";


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
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/product/:id" element={<ProductDetailsPage />} />
            <Route path="/:gender/:model/:type" element={<SubCategoryPage />} />
            <Route path="/" element={<CategorySection />} />
            <Route path="/:gender/:model/:type" element={<RelatedProducts />} />
        </Routes>
        
        <Footer/>
      
    

        </div>)
}

export default AllRoutes;