import React from "react";
import "../Css/Footer.scss";
import Logo from "../assets/logo_shop.svg";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_child-1">
        <div className="footer_child-1_grandchild-1">
          <img src={Logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
            molestias optio, tempora corrupti facilis animi.
          </p>
        </div>

        <div className="footer_child-1_grandchild-2">
          <h1>Catalog</h1>
          <div>
            <p>Necklace</p>
            <p>Hoodies</p>
            <p>Jewelry Box</p>
            <p>T-shirt</p>
            <p>Jacket</p>
          </div>
        </div>

        <div className="footer_child-1_grandchild-3">
          <h1>About us</h1>
          <div>
            <p>Our Producers</p>
            <p>Site map</p>
            <p>FAQ</p>
            <p>About us </p>
            <p>Terms & conditions</p>
          </div>
        </div>

        <div className="footer_child-1_grandchild-4">
          <h1>Customer services</h1>
          <div>
            <p>Contact Us</p>
            <p>Track Your Order</p>
            <p>Product care & repair</p>
            <p>Book an Appointment</p>
            <p>Shipping & Returns</p>
          </div>
        </div>
      </div>

      <div className="footer_child-2">
          <p>© 2022 Tribute , Inc.</p>
          <a href="#introduction">
               scroll to top
               <i className="fa-solid fa-arrow-up"></i>
          </a>
      </div>
    </footer>
  );
}
