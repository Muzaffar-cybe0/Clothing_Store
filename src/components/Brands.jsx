import React from "react";
import Brand1 from "../assets/brand-1.svg";
import Brand2 from "../assets/brand-2.svg";
import Brand3 from "../assets/brand-3.svg";
import Brand4 from "../assets/brand-4.svg";
import Brand5 from "../assets/brand-5.svg";
export default function Brands() {
  return (
    <div className="Brands" id="Brands">
      <img src={Brand1} alt="brand" />
      <img src={Brand2} alt="brand" />
      <img src={Brand3} alt="brand" />
      <img src={Brand4} alt="brand" />
      <img src={Brand5} alt="brand" />
    </div>
  );
}
