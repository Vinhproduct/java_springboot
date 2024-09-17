import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Home1 from "./Home1";
import Header from "./Header";
import Footer from "./Footer";
import UserLogin from "./UserLogin";
import UserRegister from "./UserRegister";
import SectionContent from "../pages/listinggrid/SectionContent";
import DetailProducts from "../pages/detailproducts/DetailPro";
import AddProductCart from "./AddProductCart";




//import DetailProduct from "./DetailProduct";
const Main = () => (
    <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Home1" element={<Home1 />} />
            <Route path="/Header" element={<Header />} />
            <Route path="/Footer" element={<Footer />} />
            <Route path="/Login" element={<UserLogin />} />
            <Route path="/Register" element={<UserRegister />} />
            <Route path="/ListingGrid" element={<SectionContent />} />
            <Route path="/DetailProducts" element={<DetailProducts />} />
            <Route path="/AddProductCart"element={<AddProductCart />} />
            
        </Routes>
    </main>
);
export default Main;
