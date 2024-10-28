import React, { useContext, useRef, useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../assets/logo_shop.svg";
import GlobalStore from "../store/.store";
export default function Navbar() {
  const [isTrue, setIsTrue] = useState(false);
  const navigate = useNavigate();
  const Dropdown = useRef();
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

  const ToHome = () => {
    navigate("/main_body");
  };

  const handleMenu = (e) => {
    setIsTrue((p) => !p);
    e.currentTarget.classList.toggle("active");
    setTimeout(() => {
      Dropdown.current.style.opacity = `${!isTrue ? 1 : 0}`;
    }, 200);
  };

  const { products } = useContext(GlobalStore);

  return (
    <div className="navbarContainer">
      <div className="navbar">
        <div className="child1">
          <img src={Logo} alt="logo" onClick={ToHome} />
        </div>
        <div className="child2_wrapper">

          <div className="menu-icon" onClick={(e) => handleMenu(e)}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="child2" ref={Dropdown}  style={{
              height: isTrue ? "240px" : "0%",
              top: isTrue ? "76px" : "90px",
            }}>
          <div className="child2-grandchild1">
            <a href="#Brands">Brands</a>
            <a href="#Premium">Premium</a>
            <a href="#All_Products">All Products</a>
            <Link to="/search">Search<i className="fa-solid fa-magnifying-glass"></i>
            </Link>
          </div>

          <div className="child2-grandchild2">
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
       
      </div>
    </div>
  );
}
