import React, { useState, useEffect, useContext } from "react";
import "../Css/Search.scss";
import Navbar from "../pages/Navbar";
import { Link } from "react-router-dom";
import GlobalStore from "../store/.store";
import Footer from "./Footer";
export default function Search() {
  const [ApiProducts, setApiProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products"); // Replace with your API endpoint
      const data = await response.json();
      setApiProducts(data);
    };

    fetchProducts();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = ApiProducts.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const { setProducts, products } = useContext(GlobalStore);
  const saveProduct = (item) => {
    setProducts((prev) => [...prev, item]);
  };
  return (
    <div className="Search">
      <Navbar />
      <div className="search_input">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
      </div>

      <div className="product-wrapper">
        {filteredProducts?.map((item) => {
           const title = item.title;
           const truncatedTitle =
             title.length > 10 ? `${title.slice(0, 25)}...` : title;
          return (
            <div className="product_card" key={item.id}>

              <div className="product_card-child-1">
                <img src={item.image} alt="products" />
              </div>

              <div className="product_card-child-2">
                <Link to={`/details/${item.id}`}>Read More</Link>
                <button type="button" onClick={() => saveProduct(item)}>Save</button>
              </div>

              <div className="product_card-child-3">
                <p>{truncatedTitle}</p>
                <div>
                  <p>{item.price}$</p>
                  <p>
                    ⭐️{item.rating.rate}/{item.rating.count}
                  </p>
                </div>
              </div>

            </div>
          );
        })}
      </div>
      <Footer/>
    </div>
  );
}
