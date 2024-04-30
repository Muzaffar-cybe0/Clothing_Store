import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { ToastContainer } from "react-toastify";
import Navbar from "./Navbar";

const MainBody = () => {
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) navigate("/login");
  }, []);
  return (
    <div className="MainBody">
      <Navbar/>
      <ProductCard />
      <ToastContainer />
    </div>
  );
};

export default MainBody;
