import React, { useContext } from "react";
import "./savedP.scss";
import GlobalStore from "../../store/.store";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
export default function Saved_P() {
  const { products } = useContext(GlobalStore);
  console.log(products);
  return (
    <div className="savedP_Container">
      <Navbar />
      <div className="saved_container">
        {products.map((item) => {
          const title = item.title;
          const truncatedTitle =
            title.length > 5 ? `${title.slice(0, 25)}...` : title;
          return (
            <div key={item.id} className="card">
              <div className="card__content">
                <div className="c_content-1">
                  <img src={item.image} alt="image" />
                </div>
                <div className="c_content-2">
                  <span className="title truncated-title">
                    {truncatedTitle}
                  </span>
                  <div>
                    <p>${item.price}</p>
                    <p>
                      <i className="fa-solid fa-star star"></i>
                      {item.rating.rate}/{item.rating.count}
                    </p>
                  </div>
                </div>
                <div className="c_content-3">
                  <Link to={`/details/${item.id}`}>Read More</Link>
                  <button type="button">Save</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
