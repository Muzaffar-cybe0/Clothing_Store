import React, { useContext } from "react";
import {toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Logo from '../assets/man_store_logo.png'
import GlobalStore from "../store/.store";
export default function Navbar() {
  const navigate = useNavigate();
  const notify = () => {
    toast.info("Loged out", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const transfer = () => {
    localStorage.removeItem("token");
    setTimeout(() => {
      notify();
    }, 300);
    navigate("/login");
  };
  const {products} = useContext(GlobalStore)
  return (
    <div className="navbarContainer">
    <div className="navbar">
      <div className="child1">
      <img src={Logo} alt="" />
      <Link to="/main_body">Home</Link>
      <a href="navbar">About</a>
      <a href="navbar">Contact</a>
      </div>
      <div className="child2">
      <span className="count">{products.length}</span>
      <Link to="/savedProducts">
      <i className="fa-solid fa-cart-shopping save"></i>
      </Link>
      <button type="button" onClick={() => transfer()} className="button">
        Log out
      </button>
      </div>
    </div>
    </div>
  );
}
