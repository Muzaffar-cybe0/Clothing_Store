import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { ToastContainer } from "react-toastify";
import Navbar from "./Navbar";
import Introduction from "../components/Introduction";
import Brands from "../components/Brands";
import PremiumProducts from "../components/PremiumProducts";
import Book from '../assets/Fundamentals of Materials Science and Engineering ( PDFDrive ).pdf'
import Footer from "../components/Footer";
const MainBody = () => {
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) navigate("/login");
  }, []);
  return (
    <div className="MainBody">
      <Navbar/>
      <Introduction/>
      <Brands/>
      <PremiumProducts/>
      <ProductCard />
      <Footer/>
     
    </div>
  );
};

export default MainBody;
